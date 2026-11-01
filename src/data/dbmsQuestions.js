export const dbmsQuestions = [
    {
        id: 1,
        subject: "DBMS",
        question: "What does DBMS stand for?",
        options: [
            "Database Management System",
            "Data Backup Management System",
            "Database Monitoring System",
            "Data Management Software"
        ],
        answer: "Database Management System"
    },
    {
        id: 2,
        subject: "DBMS",
        question: "Which language is commonly used to interact with relational databases?",
        options: ["HTML", "SQL", "CSS", "XML"],
        answer: "SQL"
    },
    {
        id: 3,
        subject: "DBMS",
        question: "Which SQL command retrieves data?",
        options: ["GET", "SELECT", "FETCH", "READ"],
        answer: "SELECT"
    },
    {
        id: 4,
        subject: "DBMS",
        question: "Which SQL command inserts new data?",
        options: ["ADD", "INSERT", "PUT", "CREATE"],
        answer: "INSERT"
    },
    {
        id: 5,
        subject: "DBMS",
        question: "Which SQL command modifies existing data?",
        options: ["CHANGE", "UPDATE", "MODIFY", "ALTER"],
        answer: "UPDATE"
    },
    {
        id: 6,
        subject: "DBMS",
        question: "Which SQL command removes rows from a table?",
        options: ["REMOVE", "DELETE", "DROP", "CLEAR"],
        answer: "DELETE"
    },
    {
        id: 7,
        subject: "DBMS",
        question: "Which command removes an entire table?",
        options: ["DELETE", "DROP", "REMOVE", "TRUNCATE TABLE ONLY"],
        answer: "DROP"
    },
    {
        id: 8,
        subject: "DBMS",
        question: "Which key uniquely identifies each record?",
        options: ["Foreign Key", "Primary Key", "Alternate Key", "Composite Key"],
        answer: "Primary Key"
    },
    {
        id: 9,
        subject: "DBMS",
        question: "Which key establishes a relationship between tables?",
        options: ["Primary Key", "Foreign Key", "Candidate Key", "Super Key"],
        answer: "Foreign Key"
    },
    {
        id: 10,
        subject: "DBMS",
        question: "A row in a relational table is called a:",
        options: ["Attribute", "Tuple", "Domain", "Field"],
        answer: "Tuple"
    },
    {
        id: 11,
        subject: "DBMS",
        question: "A column in a relational table is called an:",
        options: ["Attribute", "Tuple", "Record", "Relation"],
        answer: "Attribute"
    },
    {
        id: 12,
        subject: "DBMS",
        question: "Which normal form removes repeating groups?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: "1NF"
    },
    {
        id: 13,
        subject: "DBMS",
        question: "Which normal form removes partial dependency?",
        options: ["1NF", "2NF", "3NF", "4NF"],
        answer: "2NF"
    },
    {
        id: 14,
        subject: "DBMS",
        question: "Which normal form removes transitive dependency?",
        options: ["1NF", "2NF", "3NF", "5NF"],
        answer: "3NF"
    },
    {
        id: 15,
        subject: "DBMS",
        question: "Which SQL clause filters rows?",
        options: ["WHERE", "GROUP BY", "ORDER BY", "HAVING"],
        answer: "WHERE"
    },
    {
        id: 16,
        subject: "DBMS",
        question: "Which clause sorts query results?",
        options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"],
        answer: "ORDER BY"
    },
    {
        id: 17,
        subject: "DBMS",
        question: "Which clause groups rows with the same values?",
        options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
        answer: "GROUP BY"
    },
    {
        id: 18,
        subject: "DBMS",
        question: "Which clause filters groups?",
        options: ["WHERE", "HAVING", "GROUP BY", "FILTER"],
        answer: "HAVING"
    },
    {
        id: 19,
        subject: "DBMS",
        question: "Which function returns the number of rows?",
        options: ["SUM()", "COUNT()", "TOTAL()", "NUMBER()"],
        answer: "COUNT()"
    },
    {
        id: 20,
        subject: "DBMS",
        question: "Which function calculates an average?",
        options: ["AVG()", "MEAN()", "AVERAGE()", "MID()"],
        answer: "AVG()"
    },
    {
        id: 21,
        subject: "DBMS",
        question: "Which JOIN returns matching rows from both tables?",
        options: ["INNER JOIN", "FULL JOIN", "LEFT JOIN", "CROSS JOIN"],
        answer: "INNER JOIN"
    },
    {
        id: 22,
        subject: "DBMS",
        question: "Which JOIN returns all rows from the left table?",
        options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "CROSS JOIN"],
        answer: "LEFT JOIN"
    },
    {
        id: 23,
        subject: "DBMS",
        question: "What does ACID stand for in database transactions?",
        options: [
            "Atomicity, Consistency, Isolation, Durability",
            "Accuracy, Control, Integrity, Data",
            "Atomicity, Control, Isolation, Data",
            "Access, Consistency, Integrity, Durability"
        ],
        answer: "Atomicity, Consistency, Isolation, Durability"
    },
    {
        id: 24,
        subject: "DBMS",
        question: "Which property ensures a transaction happens completely or not at all?",
        options: ["Consistency", "Atomicity", "Isolation", "Durability"],
        answer: "Atomicity"
    },
    {
        id: 25,
        subject: "DBMS",
        question: "Which property ensures committed data survives system failure?",
        options: ["Atomicity", "Consistency", "Isolation", "Durability"],
        answer: "Durability"
    },
    {
        id: 26,
        subject: "DBMS",
        question: "What is an index used for?",
        options: [
            "Increasing query speed",
            "Deleting tables",
            "Creating users",
            "Backing up databases"
        ],
        answer: "Increasing query speed"
    },
    {
        id: 27,
        subject: "DBMS",
        question: "What is a view?",
        options: [
            "A virtual table",
            "A physical disk",
            "A primary key",
            "A database server"
        ],
        answer: "A virtual table"
    },
    {
        id: 28,
        subject: "DBMS",
        question: "Which command is used to create a table?",
        options: ["MAKE TABLE", "CREATE TABLE", "NEW TABLE", "BUILD TABLE"],
        answer: "CREATE TABLE"
    },
    {
        id: 29,
        subject: "DBMS",
        question: "Which command saves a transaction permanently?",
        options: ["SAVE", "COMMIT", "STORE", "PERSIST"],
        answer: "COMMIT"
    },
    {
        id: 30,
        subject: "DBMS",
        question: "Which command cancels a transaction's changes?",
        options: ["UNDO", "ROLLBACK", "CANCEL", "REVERSE"],
        answer: "ROLLBACK"
    }
];
export default dbmsQuestions;