// Use the Alexa SDK
var Alexa = require('alexa-sdk');

// Register and execute handlers
exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context, callback);
	alexa.registerHandlers(handlers);
	alexa.execute();
	};

// Different messages that Alexa will convey to the guest
var welcomeOutput = 'Welcome to RAIN Cloud. Are you a staff member, visitor or delivery personnel?';
var staffOutput = 'Thank you. HR personnel will open the door very shortly.';
var visitorOutput = 'Standby. HR personnel will open the door shortly.';
var deliveryOutput = 'Do you need someone to sign-off?';
var nowOutput = "Standby. HR Personnel will be at the front shortly."
var laterOutput = "Thank you. Please leave the package here and someone will pick it up later.";
var HELP_MESSAGE = "You can say staff, visitor, or delivery personnel?";


// When guest intitiates dialogue, Alexa will ask who the person is
this.emit(':tell', <emphasis level="moderate"> welcomeOutput </emphasis);


// Handler function(s)	
var handlers = {
	
	// OpenDoor lambda function
    'OpenDoor': function () {
        var intentObj = this.event.request.intent;
        
		// If guest is a staff
		if (intentRequest.dialogState === "STAFF") {
            //var slotToElicit = 'Staff';
            //var repromptSpeech = speechOutput;
            this.emit(':tell', staffOutput);
		} 
			
		// If guest is a visitor
		else if (intentRequest.dialogState === "VISITOR") {
			//var slotToElicit = 'Visitor';
            //var repromptSpeech = speechOutput;
            this.emit(':tell', visitorOutput);
		}
		
		// If guest ia a delivery personal
		else if (intentRequest.dialogState === "DELIVERY PERSONNEL") {
			this.emit(':ask' , deliveryOutput);
			
			// If someone needs to sign-off
			if (intentRequest.dialogState === "YES" ) {
			this.emit(':tell' , nowOutput);			
			}
			
			// If the package can be picked up later
			else {
			this.emit(':tell' , laterOutput);
			}
		}
	}, 
	
	// Use amazon help intent in case none of the above occurs
	'AMAZON.HelpIntent': function () {
        this.emit(':ask', <emphasis level="moderate"> HELP_MESSAGE </emphasis>);
    }
}
	
};
