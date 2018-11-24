user1Phone = "6472708844";

food = "Bananas";
daysLeft = "3";

const sms = lib.utils.sms['@1.0.9'];

let result = await sms({
	to: user1Phone,
	body: "Hey! Your "+food+" have "+daysLeft+" days left!";
});
