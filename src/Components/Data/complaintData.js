export const complaintCategories = {
    Electrical: {
        "Power cut": ["Short circuit", "Meter related issues", "Others"],
        "Fan Regulator": ["Regulator Broken", "Fan speed not changing", "Broken", "Missing", "Not working"],
        "Switch & Socket": ["Broken", "Missing", "Others", "Not working"],
        "Fan": ["Not Working", "Speed issues", "Noise", "Shaking", "Missing", "Broken", "Others"],
        "Bulb": ["Flickering", "Buzzing Noise", "Dim light", "Broken", "Others", "Missing", "Not working"],
        "Tubelight": ["Broken", "Others", "Missing", "Not working"],
    },
    Plumbing: {

        "Tap": ["No water supply", "Dirty/smelly Water", "Leakage", "Missing", "Broken", "Others"],
        "Shower": ["No water supply", "Dirty water", "Leakage", "Broken", "Head missing", "Others"],
        "Flush": ["No water supply", "Dirty/smelly Water", "Leakage", "Clogged", "Broken", "Others"],
        "Others": ["No water", "Low water pressure", "Leakage", "Clogged Drains", "Dirty/smelly Water", "Burst pipe", "Blocked pipes", "Empty tank", "Others"],
        "Washbasin": ["Tap broken", "No water supply", "Leakage", "Dirty/smelly water", "Waste pipe broken", "Others"],
        "Health Faucet": ["No water supply", "Dirty/smelly water", "Leakage", "Missing", "Broken", "Others"]
    },

    "Air Conditioner": {

        "Remote": ["Missing", "Not Working", "Others", "No batteries"],
        "AC Unit": ["Low Cooling", "Servicing", "Broken", "Missing", "Not working"],
        "Fan Regulator": ["Regulator Broken", "Fan speed not changing", "Broken", "Missing", "Not working"]


    },

    "Security": {
        "Others": ["Security Staff Behaviour/Grooming/Training relate", "Access Door not working", "Access card not working"],
        "Safety": ["CCTV not working", "Main gate open", "Reception unattended", "Guard absent", "Guard sleeping", "Violent neighbourhood", "Stranger in property", "Others"],
        "Theft": ["Item stolen", "Money stolen", "Others", "Broken", "Missing"]
    },


    Appliances: {
        "TV": ["Remote not working", "Battery missing", "TV Not working"],
        "Kettle": ["Faulty", "Leaking", "Not Working", "Missing", "Others"],
        "Washing Machine": ["Not Working", "Socket Broken", "Unattended clothes", "Missing", "Others"],
        "Geyser": ["Leaking", "Not Working", "Socket Broken", "Power issue", "Missing", "Others"],
        "Fridge": ["Cooling", "Gate Broken", "Not Working", "Socket Broken", "Missing", "Others"],
        "Microwave": ["Socket Broken", "Broken Plate", "Not Working", "Others", "Missing"],
        "Induction": ["Socket Broken", "Missing", "Not working", "Others"]
    },
    Housekeeping: {
        "Others": ["Staff behaviour issues", "Staff not available", "Others"],
        "Pest Control": ["Lizards", "Rats", "Mosquitoes", "Cockroaches", "Termites", "Others"],
        "Garbage": ["Not Disposed", "Smelling", "Not Managed", "Others"],
        "Utensils": ["Dirty", "Missing", "Inadequate", "Chipped", "Others"],
        "Cleaning": ["Not Done", "Not Regular", "Quality", "Room", "Washroom", "Common Area", "Staff Absent", "Material Missing", "Others"]
    },

    Medical: {
        "Others": ["Add Problem"],
        "Fan Regulator": ["Faint", "Pain", "Accident", "Others"]
    },

    Carpentry: {
        "Bookshelf": ["Broken", "Missing", "Others"],
        "Others": ["Rotting Wood", "Others"],
        "Sofa": ["Cushion missing", "Broken", "Back support issues", "Others"],
        "Window": ["Not opening", "Not closing", "Broken", "Glass broken", "Others"],
        "Door": ["Faulty lock", "Noise", "Handle broken", "Others"],
        "Wall Mirror": ["Broken", "Missing", "Others"],
        "Chair": ["Not stable", "Broken", "Back support issues", "Missing", "Others"],
        "Study Table": ["Not stable", "Broken rack", "Missing", "Others"],
        "Cupboard": ["Door missing", "Rack lock broken", "Hangers broken", "Hangers missing", "Others"],
        "Bed & Mattress": ["Damaged", "Torn Mattress", "Squeaky Bed Frame", "Side table damaged", "Side table missing", "Others"]
    },

    "Common Area": {
        "Others": ["Cleaning not done", "Elevator not working", "Elevator other issues", "Garbage not collected", "Others"],
        "Furniture": ["Sofa damaged", "Chairs damaged/Broken"],
        "Appliances": ["Refrigerator not working", "Microwave not working", "Induction Stove not working", "Light not working", "Fan not working", "Others"]
    },

    Community: {
        "Neighbourhood": ["Violent", "Peeking in premises", "Others"],
        "Room-Mate": ["Light on till late", "Plays loud music", "Always on phone", "Unhygienic", "Unorganised", "Threatening", "Misbehaves", "AC high", "AC low", "Smokes in room", "Drinks in room", "Sick", "Has friends over", "Talks too loud", "Steals money", "Others"],
        "Staff": ["Not good", "Not attentive", "Always on phone", "Has friends over", "Talks too loud", "Talk too much", "Steals food", "Steals items", "Steals money", "Unhygienic", "Others"]
    },

    Laundry: {
        "Washing": ["Quality", "Not Done", "Damaged Cloth", "Clothes stained", "Odour", "Others"],
        "Delivery": ["Not Done", "Timing", "Delay", "Required", "Missing Clothes", "Laundry Slip required", "Extra clothes received", "Others"],
        "Pickup": ["Not Done", "Timing", "Delay", "Required", "Laundry Bag Misplaced", "Others"],
        "Iron": ["Quality", "Not Done", "Damaged Cloth", "Others"]
    },

    "Repairs and Maintenance": {
        "Paint": ["Damp Wall", "Stains", "Damaged", "Paint touch up required", "Others"],
        "Lock": ["Key not working", "Key lost", "Knob broken", "Others"]
    },

    "Food and Beverage": {
        "Menu": ["Update Required", "Repetitive", "Variety", "Less Desserts", "Items Missing", "Set menu not followed", "Others"],
        "Material": ["Milk", "Pickle", "Fruits", "Tea", "Coffee", "Sauce", "Others"],
        "Delivery": ["Timing", "Not Done", "Others"],
        "Food": ["Taste", "Stale", "Delay in food setup", "Undercooked food", "Quantity not adequate", "Unhygienic food", "Not Available", "Cutlery/crockery not washed properly", "Food finished before time", "Staff Grooming/Training/Behaviour", "Others"]
    },

    Finance: {
        "Invoice": ["Required", "Incorrect", "Not received", "Others"],
        "Accounts": ["Summary required", "Mismatched", "Incorrect", "Others"],
        "Payment": ["Not reflecting", "Cash not marked", "Error", "Others"]
    },

    Onboarding: {
        "Paint": [
            "Damp Wall",
            "Stains",
            "Damaged",
            "Paint touch up required",
            "Others"
        ],
        "Lock": [
            "Key not working",
            "Key lost",
            "Knob broken",
            "Others"
        ]
    },

    "Internet and Connection": {
        "Network Booster": ["Bad network", "Required", "Others"],
        "DTH": ["Remote not working", "Not Working", "Needs recharge", "Channels not available", "Others"],
        "Wi-Fi": ["Password incorrect", "Password required", "Not Working", "Low speed", "Unstable", "Others"]
    }
}
