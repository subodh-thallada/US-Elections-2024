from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import matplotlib.pyplot as plt
import io
import base64

app = Flask(__name__)
CORS(app)

# Endpoint for Google Earth images (Mock Data)
@app.route('/google-earth', methods=['GET'])
def google_earth():
    location = request.args.get('location', 'Los Angeles')
    return jsonify({"location": location, "image_url": f"https://via.placeholder.com/600x400?text={location}"})


# Betting odds data
betting_odds_data = [
    {"state": "Alabama", "dem_percentage": "34%", "rep_percentage": "65%", "winner": "Donald J. Trump"},
    {"state": "Alaska", "dem_percentage": "41%", "rep_percentage": "55%", "winner": "Donald J. Trump"},
    {"state": "Arizona", "dem_percentage": "46%", "rep_percentage": "54%", "winner": "Donald J. Trump"},
    {"state": "Arkansas", "dem_percentage": "34%", "rep_percentage": "64%", "winner": "Donald J. Trump"},
    {"state": "California", "dem_percentage": "58%", "rep_percentage": "38%", "winner": "Kamala D. Harris"},
    {"state": "Colorado", "dem_percentage": "54%", "rep_percentage": "43%", "winner": "Kamala D. Harris"},
    {"state": "Connecticut", "dem_percentage": "56%", "rep_percentage": "42%", "winner": "Kamala D. Harris"},
    {"state": "Delaware", "dem_percentage": "57%", "rep_percentage": "42%", "winner": "Kamala D. Harris"},
    {"state": "District of Columbia", "dem_percentage": "90%", "rep_percentage": "6%", "winner": "Kamala D. Harris"},
    {"state": "Florida", "dem_percentage": "43%", "rep_percentage": "56%", "winner": "Donald J. Trump"},
    {"state": "Georgia", "dem_percentage": "46%", "rep_percentage": "54%", "winner": "Donald J. Trump"},
    {"state": "Hawaii", "dem_percentage": "61%", "rep_percentage": "37%", "winner": "Kamala D. Harris"},
    {"state": "Idaho", "dem_percentage": "30%", "rep_percentage": "67%", "winner": "Donald J. Trump"},
    {"state": "Illinois", "dem_percentage": "54%", "rep_percentage": "43%", "winner": "Kamala D. Harris"},
    {"state": "Indiana", "dem_percentage": "40%", "rep_percentage": "59%", "winner": "Donald J. Trump"},
    {"state": "Iowa", "dem_percentage": "43%", "rep_percentage": "56%", "winner": "Donald J. Trump"},
    {"state": "Kansas", "dem_percentage": "41%", "rep_percentage": "57%", "winner": "Donald J. Trump"},
    {"state": "Kentucky", "dem_percentage": "34%", "rep_percentage": "64%", "winner": "Donald J. Trump"},
    {"state": "Louisiana", "dem_percentage": "38%", "rep_percentage": "60%", "winner": "Donald J. Trump"},
    {"state": "Maine", "dem_percentage": "52%", "rep_percentage": "45%", "winner": "Kamala D. Harris"},
    {"state": "Maryland", "dem_percentage": "63%", "rep_percentage": "34%", "winner": "Kamala D. Harris"},
    {"state": "Massachusetts", "dem_percentage": "61%", "rep_percentage": "36%", "winner": "Kamala D. Harris"},
    {"state": "Michigan", "dem_percentage": "45%", "rep_percentage": "55%", "winner": "Donald J. Trump"},
    {"state": "Minnesota", "dem_percentage": "51%", "rep_percentage": "47%", "winner": "Kamala D. Harris"},
    {"state": "Mississippi", "dem_percentage": "38%", "rep_percentage": "61%", "winner": "Donald J. Trump"},
    {"state": "Missouri", "dem_percentage": "40%", "rep_percentage": "58%", "winner": "Donald J. Trump"},
    {"state": "Montana", "dem_percentage": "38%", "rep_percentage": "58%", "winner": "Donald J. Trump"},
    {"state": "Nebraska", "dem_percentage": "39%", "rep_percentage": "59%", "winner": "Donald J. Trump"},
    {"state": "Nevada", "dem_percentage": "44%", "rep_percentage": "56%", "winner": "Donald J. Trump"},
    {"state": "New Hampshire", "dem_percentage": "51%", "rep_percentage": "48%", "winner": "Kamala D. Harris"},
    {"state": "New Jersey", "dem_percentage": "52%", "rep_percentage": "46%", "winner": "Kamala D. Harris"},
    {"state": "New Mexico", "dem_percentage": "52%", "rep_percentage": "46%", "winner": "Kamala D. Harris"},
    {"state": "New York", "dem_percentage": "56%", "rep_percentage": "43%", "winner": "Kamala D. Harris"},
    {"state": "North Carolina", "dem_percentage": "46%", "rep_percentage": "54%", "winner": "Donald J. Trump"},
    {"state": "North Dakota", "dem_percentage": "31%", "rep_percentage": "67%", "winner": "Donald J. Trump"},
    {"state": "Ohio", "dem_percentage": "44%", "rep_percentage": "55%", "winner": "Donald J. Trump"},
    {"state": "Oklahoma", "dem_percentage": "32%", "rep_percentage": "66%", "winner": "Donald J. Trump"},
    {"state": "Oregon", "dem_percentage": "55%", "rep_percentage": "41%", "winner": "Kamala D. Harris"},
    {"state": "Pennsylvania", "dem_percentage": "45%", "rep_percentage": "55%", "winner": "Donald J. Trump"},
    {"state": "Rhode Island", "dem_percentage": "56%", "rep_percentage": "42%", "winner": "Kamala D. Harris"},
    {"state": "South Carolina", "dem_percentage": "40%", "rep_percentage": "58%", "winner": "Donald J. Trump"},
    {"state": "South Dakota", "dem_percentage": "34%", "rep_percentage": "63%", "winner": "Donald J. Trump"},
    {"state": "Tennessee", "dem_percentage": "34%", "rep_percentage": "64%", "winner": "Donald J. Trump"},
    {"state": "Texas", "dem_percentage": "42%", "rep_percentage": "56%", "winner": "Donald J. Trump"},
    {"state": "Utah", "dem_percentage": "38%", "rep_percentage": "59%", "winner": "Donald J. Trump"},
    {"state": "Vermont", "dem_percentage": "64%", "rep_percentage": "32%", "winner": "Kamala D. Harris"},
    {"state": "Virginia", "dem_percentage": "52%", "rep_percentage": "46%", "winner": "Kamala D. Harris"},
    {"state": "Washington", "dem_percentage": "57%", "rep_percentage": "39%", "winner": "Kamala D. Harris"},
    {"state": "West Virginia", "dem_percentage": "28%", "rep_percentage": "70%", "winner": "Donald J. Trump"},
    {"state": "Wisconsin", "dem_percentage": "46%", "rep_percentage": "54%", "winner": "Donald J. Trump"},
    {"state": "Wyoming", "dem_percentage": "26%", "rep_percentage": "72%", "winner": "Donald J. Trump"}
]

@app.route('/betting-odds', methods=['GET'])
def get_betting_odds():
    return jsonify(betting_odds_data)


# Updated betting odds for 2024 election
betting_odds_2024 = [
    {"state": "Alabama", "republican_odds": -10000, "democrat_odds": +3300},
    {"state": "Alaska", "republican_odds": -10000, "democrat_odds": +1200},
    {"state": "Arizona", "republican_odds": -400, "democrat_odds": +250},
    {"state": "Arkansas", "republican_odds": -10000, "democrat_odds": +3000},
    {"state": "California", "republican_odds": +3000, "democrat_odds": -10000},
    {"state": "Colorado", "republican_odds": +1400, "democrat_odds": -10000},
    {"state": "Connecticut", "republican_odds": +2000, "democrat_odds": -10000},
    {"state": "Delaware", "republican_odds": +2500, "democrat_odds": -10000},
    {"state": "Florida", "republican_odds": -2500, "democrat_odds": +900},
    {"state": "Georgia", "republican_odds": -333, "democrat_odds": +225},
    {"state": "Hawaii", "republican_odds": +2500, "democrat_odds": -10000},
    {"state": "Idaho", "republican_odds": -10000, "democrat_odds": +2500},
    {"state": "Illinois", "republican_odds": +2500, "democrat_odds": -10000},
    {"state": "Indiana", "republican_odds": -10000, "democrat_odds": +2500},
    {"state": "Iowa", "republican_odds": -10000, "democrat_odds": +1400},
    {"state": "Kansas", "republican_odds": -10000, "democrat_odds": +2500},
    {"state": "Kentucky", "republican_odds": -10000, "democrat_odds": +3000},
    {"state": "Louisiana", "republican_odds": -10000, "democrat_odds": +2500},
    {"state": "Maine", "republican_odds": +650, "democrat_odds": -1800},
    {"state": "Maryland", "republican_odds": +1600, "democrat_odds": -10000},
    {"state": "Massachusetts", "republican_odds": +1600, "democrat_odds": -10000},
    {"state": "Michigan", "republican_odds": -800, "democrat_odds": +450},
    {"state": "Minnesota", "republican_odds": +700, "democrat_odds": -1400},
    {"state": "Mississippi", "republican_odds": -10000, "democrat_odds": +1600},
    {"state": "Missouri", "republican_odds": -5000, "democrat_odds": +1200},
    {"state": "Montana", "republican_odds": -10000, "democrat_odds": +1600},
    {"state": "Nebraska", "republican_odds": -10000, "democrat_odds": +1600},
    {"state": "Nevada", "republican_odds": -1000, "democrat_odds": +550},
    {"state": "New Hampshire", "republican_odds": +300, "democrat_odds": -450},
    {"state": "New Jersey", "republican_odds": +1600, "democrat_odds": -10000},
    {"state": "New Mexico", "republican_odds": +650, "democrat_odds": -1600},
    {"state": "New York", "republican_odds": +2000, "democrat_odds": -10000},
    {"state": "North Carolina", "republican_odds": -333, "democrat_odds": +225},
    {"state": "North Dakota", "republican_odds": -10000, "democrat_odds": +1600},
    {"state": "Ohio", "republican_odds": -5000, "democrat_odds": +1200},
    {"state": "Oklahoma", "republican_odds": -10000, "democrat_odds": +2500},
    {"state": "Oregon", "republican_odds": +2000, "democrat_odds": -10000},
    {"state": "Pennsylvania", "republican_odds": -2000, "democrat_odds": +750},
    {"state": "Rhode Island", "republican_odds": +1600, "democrat_odds": -10000},
    {"state": "South Carolina", "republican_odds": -10000, "democrat_odds": +1600},
    {"state": "South Dakota", "republican_odds": -10000, "democrat_odds": +1600},
    {"state": "Tennessee", "republican_odds": -10000, "democrat_odds": +3000},
    {"state": "Texas", "republican_odds": -10000, "democrat_odds": +2500},
    {"state": "Utah", "republican_odds": -10000, "democrat_odds": +2500},
    {"state": "Vermont", "republican_odds": +2000, "democrat_odds": -10000},
    {"state": "Virginia", "republican_odds": +400, "democrat_odds": -700},
    {"state": "Washington", "republican_odds": +2000, "democrat_odds": -10000},
    {"state": "West Virginia", "republican_odds": -10000, "democrat_odds": +1600},
    {"state": "Wisconsin", "republican_odds": -2000, "democrat_odds": +750},
    {"state": "Wyoming", "republican_odds": -10000, "democrat_odds": +1600}
]

@app.route('/betting-odds-2024', methods=['GET'])
def get_betting_odds_2024():
    return jsonify(betting_odds_2024)


@app.route('/api/search')
def search():
    query = request.args.get('state', '').lower()
    
    # Search in betting_odds_data
    for state in betting_odds_data:
        if state['state'].lower() == query:
            margin = abs(float(state['dem_percentage'].rstrip('%')) - 
                        float(state['rep_percentage'].rstrip('%')))
            
            # Find betting odds for 2024
            odds_2024 = next((odds for odds in betting_odds_2024 
                            if odds['state'].lower() == query), None)
            
            return jsonify({
                'name': state['state'],
                'winner': state['winner'],
                'margin': f"{margin:.1f}",
                'odds': f"R: {odds_2024['republican_odds']} | D: {odds_2024['democrat_odds']}" if odds_2024 else "N/A",
                'dem_percentage': state['dem_percentage'],
                'rep_percentage': state['rep_percentage']
            })
    
    return jsonify({'error': 'State not found'}), 404


# Endpoint for polling data (Mock Data)
@app.route('/polling-data', methods=['GET'])
def polling_data():
    data = [{"state": "California", "candidate_a": 60, "candidate_b": 40},
            {"state": "Texas", "candidate_a": 45, "candidate_b": 55}]
    return jsonify(data)


# Endpoint to visualize polling data
@app.route('/polling-visualization', methods=['GET'])
def polling_visualization():
    data = [{"state": "California", "candidate_a": 60, "candidate_b": 40},
            {"state": "Texas", "candidate_a": 45, "candidate_b": 55}]
    df = pd.DataFrame(data)
    ax = df.plot(kind='bar', x='state', stacked=True, figsize=(8, 5))
    plt.title("Polling Data by State")
    plt.ylabel("Percentage")
    plt.xlabel("State")

    buf = io.BytesIO()
    plt.savefig(buf, format='png')
    buf.seek(0)
    img_data = base64.b64encode(buf.getvalue()).decode()
    buf.close()

    return jsonify({"image_data": f"data:image/png;base64,{img_data}"})


if __name__ == '__main__':
    app.run(debug=True)
