from unittest import result
from flask import Blueprint, redirect, render_template, current_app, url_for

upload = Blueprint("upload", __name__, static_folder="static", template_folder="templates")

@upload.route("/")
def upload_page():
    data = current_app.config['data'].head(50)
    return render_template("upload.html", headers = data.columns, data = data.values)