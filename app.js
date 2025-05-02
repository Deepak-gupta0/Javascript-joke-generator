let jokeStr = `1. Just got attacked by 6 dwarves. Not Happy.

2. A priest, a minister, and a rabbit walk into a blood bank. The rabbit says, “I believe that I am a type o.”


3. You know, there’s a fine line between fishing and standing on the shore like an idiot.

4. I’ll never forget my dad’s face when I gave him his 50th birthday card, tears in his eyes, as he said to me, ‘One would have done.’


5. A father was washing his car with his son and the son asked, “Dad, can’t you just use a sponge?”

6. A friend of mine is an agnostic, dyslexic insomniac. He stays up all night long wondering if there’s a dog.


7. One day, a police officer pulls a car over and sees the backseat is full of penguins. The officer tells the driver, “You can’t be doing this, you need to take these penguins to the zoo!”

The next day, the police officer pulls the same car over again, and says, “Hey! I told you to take these penguins to the zoo!” The driver says, “I did, and today I’m taking them to the movies!”


8. Plateaus are the highest form of flattery.

9. A sandwich walks into a bar, the barman says, “Sorry, we don’t serve food in here.”


10. My dad used to always say, “You should fight fire with fire!” Which is probably why he got thrown out of the fire department.

11. What did they give the guy that invented the door knocker? A No-bell prize.


12. Larry was an old piece of lasso who steps into a bar one day for a drink. The bartender looks at him suspiciously and says, “Hey, Pal, we don’t serve ropes here.”

Larry steps outside, ties himself into a clove hitch and unravels one of his ends into a feathery mess. He goes back inside and in a low voice says, “Beer, please.” Bartender says, “Hey. aren’t you that rope who was just in here?” Larry replies, “No, I’m a frayed knot.”


13. Two fish swim into a concrete wall. One turns to the other and says, “Dam.”

14. This grasshopper walks into a bar and the bartender says, “Hey, I have a drink named after you!” The grasshopper looks confused and says, “You have a drink called Irving?”


15. When does a joke become a dad joke? When it’s apparent.

16. What do you call it when Batman skips church? Christian Bale.


17. Why do space rocks taste better than Earth rocks? They’re a little meteor.

18. Me: Hey want to hear a ghost’s joke?

Them: Yeah, sure.

Me: That’s the spirit.


19. Guy 1: I slept like a baby last night!

Guy 2: Oh, really?

Guy 1: Yeah! I woke up every 2 hours crying!

20. What does a thesaurus eat for breakfast? A synonym roll.

21. You: Knock Knock

Them: Who’s there?

You: Control freak… Alright, now you say, “Control freak who?”

22. Did you hear about the kidnapping in the park? They woke him up.

23. A guy goes to the eye doctor.

He says, “I have trouble seeing things at a distance.”

The doc takes him over to the window, points up to the sky, and says, “What do you see up there?”

The guy says, “The sun.”

Doc says, “That’s right. So, exactly HOW far do you need to see, dude?”

24. What do you call a Frenchman wearing sandals? Phillipe Philoppe.

25. I have a lot of jokes about unemployment, but none of them work.

26. Why did the ancient Egyptians like to keep their heads shaved? To be more Pharaoh-dynamic.

27. What do you call an explosive monkey? Baboom!

28. What time did Sean Connery go to Wimbledon? About tennish.

29. Why do North Koreans draw the best straight lines? They have a supreme ruler.

30. Knock knock.

Who’s there?

Owls.

Owls who?

Yes, yes they do.

31. You can’t explain a pun to a kleptomaniac. They take things, literally.

32. She got fired from the hot dog stand for putting her hair in a bun.

33. I would’ve kept off the grass, but I don’t understand sign language.

34. Why are pirates so salty? They just arrrrr.

35. I love to tell dad jokes. Sometimes he laughs.

36. I dyed my hair today. It was the highlight of the week.

37. That was a very emotional wedding. Even the cake was in tiers.

38. Does the name Pavlov ring a bell?

39. A pessimist’s blood type is B-negative.

40. You can’t trust a deli sandwich. They’re full of bologna.

41. Why couldn’t the lifeguard save the hippy? He was too far out, man

42. What do you get when 9 ants move in with his buddy? Tenants.

43. A termite walks into a bar and asks, “Is the bar tender here?”

44. What’s the difference between a hobo on a unicycle, and a man in a suit on a bike? Attire.

45. What did the sushi say to the bee? Wasabeeee!

46. I looked outside to see my dad stop mowing the lawn and break down crying.

I asked my mom what was wrong, she said, “He’s just going through a rough patch.”

47. What do you call it when you feed dynamite to a bull? Abominable.

48. Two fish are in a tank. One says to the other, “How do you drive this thing?”

49. A man asks a librarian, “Do you have any books about turtles?”

The librarian says, “Hardback?”

The man says, “Yeah, with the little heads.”

50. What do you call it when you finish your tea? Tea end`;

let splitArray = jokeStr.split("\n");

let jokeArray = splitArray.reduce((acc, item) => {
  if (item !== "") {
    acc.push(item);
  }
  return acc;
}, []);

function gettingJoke() {
  let random = Math.random() * 50;
  randomRoundOff = Math.round(random);
}
let button = document.querySelector('button')
let para = document.querySelector('p')
button.addEventListener('click', () => {
  gettingJoke();
  para.innerHTML = jokeArray[randomRoundOff];
})

