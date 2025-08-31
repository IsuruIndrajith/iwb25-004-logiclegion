import ballerina/http;

type Expense record {|
    int id;
    string category;
    float amount;
    string date;
|};

service /expenseTracker on new http:Listener(8080) {
    resource function get .(http:Caller caller, http:Request req) returns error? {
    check caller->respond({
        message: "Expense Tracker API",
        endpoints: [
            "GET  /expenseTracker/expenses",
            "POST /expenseTracker/expenses",
            "GET  /expenseTracker/expenses/{category}",
            "GET  /expenseTracker/summary"
        ]
    });
}

    // In-memory expense storage
    private Expense[] expenses = [];
    private int expenseId = 1;

    // Add a new expense
    resource function post expenses(http:Caller caller, http:Request req) returns error? {
        json reqPayload = check req.getJsonPayload();

        string category = check reqPayload.category.ensureType(string);
        float amount = check reqPayload.amount.ensureType(float);
        string date = check reqPayload.date.ensureType(string);

        Expense newExpense = {
            id: self.expenseId,
            category: category,
            amount: amount,
            date: date
        };

        self.expenses.push(newExpense);
        self.expenseId += 1;

        check caller->respond({ message: "Expense added successfully", expense: newExpense });
    }

    // Get all expenses
    resource function get expenses(http:Caller caller, http:Request req) returns error? {
        check caller->respond(self.expenses);
    }

    // Get expenses by category
    resource function get expenses/[string categoryName](http:Caller caller, http:Request req) returns error? {
        Expense[] filtered = from var e in self.expenses
                             where e.category.toLowerAscii() == categoryName.toLowerAscii()
                             select e;
        check caller->respond(filtered);
    }

    // Get expense summary (total by category)
    resource function get summary(http:Caller caller, http:Request req) returns error? {
        map<float> summary = {};
        foreach var e in self.expenses {
            float existing = summary.hasKey(e.category) ? check summary[e.category].ensureType(float) : 0.0;
            summary[e.category] = existing + e.amount;
        }
        check caller->respond(summary);
    }
}
