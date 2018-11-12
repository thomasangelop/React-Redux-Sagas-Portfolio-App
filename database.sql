-- create two tables 
CREATE TABLE "tags" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL
);

CREATE TABLE "projects" (
    "id" SERIAL PRIMARY KEY,
    "name" varchar(255) NOT NULL,
    "description" varchar(2048),
    "thumbnail" varchar(2048), 
    "website" varchar(2048),
    "github" varchar(2048),
    "date_completed" date,
    "tag_id" INT REFERENCES "tags"
);

--Put info into tags table
INSERT INTO "tags" ("name") 
VALUES ('React'), ('jQuery'), ('Node'), ('SQL'), ('Redux'), ('HTML');

--Put two projects into projects table
INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") VALUES ('Feedback Portal App Built In React', 'This is a feedback app build in React. It takes input on 4 pages, tells the user their progress and then posts the input to a database. There is also an admin portal showing all feedback and has the option to delete feedback from the database.', 'feedbackAppPage1.png', 'https://www.thomasangelo.codes', 'https://github.com/thomasangelop/React-Feedback-App', '2018-11-06', 1);

INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") VALUES ('React-Sagas Portfolio App', 'A portfolio app to showcase code.', 'portfolioApp.png', 'https://www.thomasangelo.codes', 'https://github.com/thomasangelop/React-Redux-Sagas-Portfolio-App', '2018-11-11', 1);

--Select view for Projects List: 
SELECT projects.id, projects.name, projects.description, projects.thumbnail, projects.website, projects.github, projects.date_completed, tags.name AS tag_name FROM projects JOIN tags ON projects.tag_id=tags.id ORDER BY projects.name;

--Select all and order by name
SELECT * FROM projects ORDER BY name;