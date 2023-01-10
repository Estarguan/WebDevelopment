from flask import Flask
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
DB_NAME = "database.db"

def create_database(app):
  if not path.exists('website/' + DB_NAME):
    with app.app_context():
      db.create_all()


app = Flask(__name__)
app.config['SECRET_KEY'] = '12345'
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{DB_NAME}'
db.init_app(app)
create_database(app)

@app.route("/members")
def members():
  return 

if __name__ == "__main__":
  app.run(debug=True)

