from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Home Page
@app.route('/')
def home():
    return render_template('index.html')


# API for getting the product list
@app.route('/api/products')
def get_products():
    skincare_products = [
        {
            "id": 1,
            "name": "Vitamin C Serum",
            "category": "serum",
            "price": 25.00
        },
        {
            "id": 2,
            "name": "Gentle Facial Cleanser",
            "category": "cleanser",
            "price": 15.00
        },
        {
            "id": 3,
            "name": "SPF 50+ Sunscreen",
            "category": "sunscreen",
            "price": 18.50
        }
    ]

    return jsonify(skincare_products)


if __name__ == '__main__':
    app.run(debug=True)