function getMessage(){
    let desc = "Get description of ";
    let basicMoves = [ 
        "**~engage**: " + "\t" + desc + "'Directly Engage a Threat'", 
        "**~unleash**: " + "\t" + desc + "'Unleash Your Powers'",
        "**~comfort**: " + "\t" + desc + "'Comfort or Support'",
        "**~pierce**: " + "\t" + desc + "'Pierce the Mask'",
        "**~defend**: " + "\t" + desc + "'Defend'",
        "**~assess**: " + "\t" + desc + "'Assess the Situation'",
        "**~provoke**: " + "\t" + desc + "'Provoke Someone'",
        "**~blow**: " + "\t" + desc + "'Take a Powerful Blow'"
    ];

    let periphMoves = [
        "**~start**: " + "\t" + desc + "'Start of Session",
        "**~end**: " + "\t" + desc + "'End of Session'",
        "**~team**: " + "\t" + desc + "'Team Mechanics'",
        "**~conditions**: " + "\t" + desc + "'Conditions'",
        "**~clear**: " + "\t" + desc + "'Clearing Conditions'",
        "**~shift**: " + "\t" + desc + "'Shifting Labels'",
        "**~influence**: " + "\t" + desc + "'Influence'",
        "**~moment**: " + "\t" + desc + "'Moment of Truth'",
        "**~advancements**: " + "\t" + desc + "'Advancements'"
    ];

    let msg = "Command List:" + "\n" + "\n" 
    + "**/r [#dice]d[#sides] [ + | - | * | / ] [#]**: " + "\t" + "Roll [#dice] [#sides]-sided die, [ + | - | * | / ] [#]." + "\n" + "Example: /r 2d6 + 2" + "\n" + "\n"
    + " BASIC MOVES" + "\n";

    for(let x = 0; x < basicMoves.length; x++){
        msg = msg + basicMoves[x] + "\n";
        
        if (x === (basicMoves.length - 1)){
            msg = msg + "\n";
        }
    }

    msg = msg + " PERIPHERAL MOVES " + "\n"

    for (let y = 0; y < periphMoves.length; y++){
        msg = msg + periphMoves[y] + "\n";

        if (y === (periphMoves.length - 1)){
            msg = msg + "\n";
        }
    }

    return new Promise((resolve, reject) => {
        resolve(msg);
    });
}

module.exports = { getMessage };