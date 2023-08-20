//game engine functions:
var newTile = function(num,t1,t2,b1,b2,b3,s1,s2,s3){
  $("#scene"+num).html('<div class = "innertile1"><div class = "inner-text"><h1>'+t1+'</h1><p>'+t2+'</p><a href = "#'+s1+'"><button class = "choice1-'+num+' btn btn-default">'+b1+'</button></a><a href = "#'+s2+'"><button class = "choice2-'+num+' btn btn-default">'+b2+'</button></a><a href = "#'+s3+'"><button class = "choice3-'+num+' btn btn-default">'+b3+'</button></a></div></div>');
  $("."+s1).hide();
  $("."+s2).hide();
  $("."+s3).hide();
  
  $(".choice1-"+num).on("click",function(){
    $("."+s1).show();
    $("#scene"+num).hide();
  });
  $(".choice2-"+num).on("click",function(){
    $("."+s2).show();
        $("#scene"+num).hide();

  });
  $(".choice3-"+num).on("click",function(){
    $("."+s3).show();
        $("#scene"+num).hide();

  });
  
};
var fail = function(num,t1,t2,b1,b2,b3,s1,s2,s3){
  $("#scene"+num).html('<div class = "innertile1"><div class = "inner-text"><h1>'+t1+'</h1><p>'+t2+'</p><a href = "#'+s1+'"><button class = "choice1-'+num+' btn btn-default">'+b1+'</button></a><a href = "#'+s2+'"><button class = "choice2-'+num+' btn btn-default">'+b2+'</button></a><a href = "#'+s3+'"><button class = "choice3-'+num+' btn btn-default">'+b3+'</button></a></div></div>');
  $(".choice1-"+num).on("click",function(){
    $("."+s1).show();
    $("#scene"+num).hide();
  });
  $(".choice2-"+num).on("click",function(){
    $("."+s2).show();
        $("#scene"+num).hide();

  });
  $(".choice3-"+num).on("click",function(){
    $("."+s3).show();
        $("#scene"+num).hide();

  });
};

 const urlParams = new URLSearchParams(window.location.search);
const dataValue = urlParams.get('dataValue');
{
newTile('1','Welcome Agent ' + dataValue ,'<strong>rules:</strong><br>1. click the button with the answer that you think is right<br>2. Try your best to get to the end.<br>3. that\'s pretty much all<br><br>You are a spy sent on a mission. You find yourself outside a secure government facility. Whats your move?','Look for a ventilation duct to sneak into the building.','Approach the main entrance and try to charm your way in.','Hack into the facility\'s security system to gain access.',"scene2","scene3","scene4");

newTile('2','You Can Continue!','You successfully enter the facility through the ventilation duct. You hear voices coming from two different rooms. What do you do?','Barge into the room on the left without any hesitation.','Eavesdrop on the conversation in the room on the right.','Send in a mini surveillance drone to gather information.','scene5','scene6','scene7');

newTile('6','You put your ear to the door and listen...','Eavesdropping reveals vital information, but you trigger an alarm while leaving the room. What\'s your next move?','Evade the guards and head for the central control room to disable the alarm.','Use your hacking skills to shut down the security system remotely.','Find an alternative route to escape without encountering guards.','scene5','scene8','scene9');

newTile('9','Good Work...','You successfully disable the alarm and gather more intel from the control room. As you move deeper into the facility, you stumble upon a locked door. How do you proceed?','Force the door open with your strength','Search nearby rooms for a keycard or code.','Utilize your lock-picking skills to unlock the door.','scene10','scene11','scene12');

newTile('11','','Behind the locked door, you discover a hidden laboratory with crucial documents. However, the lights suddenly go out, and you hear footsteps approaching. What\'s your plan?','Use your night vision goggles to navigate and escape unnoticed.','Hide in a corner and wait for the intruders to pass.','Confront the intruders head-on and overpower them.','scene50','scene13','scene14');

newTile('13','You are not seen!','You escape the laboratory unnoticed and find yourself in a dimly lit corridor. Ahead, you spot a security camera scanning the area. What\'s your strategy?','Disable the camera with a well-aimed shot.','Hack into the security network and loop the camera feed.','Find an alternate path through maintenance tunnels to bypass the camera.','scene16','scene15','scene17');

newTile('16','You are in a new room','When you are looking around the room, you can\'t find any keys, so you take out your metal detector (sorry, I forgot to tell you that you had one) and scan the room. A few minutes later, the metal detector picks up some metal under a rug and the type is brass. You look under the rug, and there is the key!','use the key','put the key in your mouth','put the key in the keyhole <strong>Right Side In</strong>, turn it, and open the door.','scene18','scene19','scene20');

newTile('20','The door clicks open...','The door clicks open and in front of you is a really dark hall. You hear some thudding on the floor. It doesn\'t seem too far away. There are no other options besides the hall except down what seems an endlessly deep hole.<br>what do you do?','walk into the hall','use your laser scope to scan the area','test your rocket launcher down the hole','scene21','scene22','scene23');

newTile('22','The Hall is crawling with robots...','...So you decide to fire either a rocket or throw a grenade into the hall','nah- there might already be some explosives in the hall. grenade!','Rocket. it <em>might</em> be better.','both','scene24','scene25','scene26');

newTile('25','Just Enough power!','All the robots you can see get blown up and annihilated. A confetti of burnt and crushed parts get thrown into the air.','laser scope the hall again','go in','shoot another missile into the hall.','scene27','scene28','scene29');

newTile('27','Good choice!','Just as you turn on you laser scope, a turret emerges from the wall, camoflaged inside the tunnel. It fires at you once. You dodge the bullet. What do you shoot it with?','A bullet','no- a grenade. more powerful','another rocket. the turret might be shielded.','scene30','scene29','scene29');

newTile('30','Close call!','Your bullet hits the turret right before it fires another bullet at you. Luckily, the turret\'s bullets are really slow and give you time to dodge. The turret isn\'t shielded and takes heavy damage.','shoot the turret down the barrel','fire at it\'s body','shoot the heavily guarded metal box on top of it!.','scene31','scene32','scene32');

newTile('32','The turret dies','The turret shuts down. As you learned from before, you shoot it again to make sure it is dead. Now you can walk down the hall. There is a passage that turns right at the end of the hall.','sure, walk down the hall.','keep your laser scope on and walk<br>down the hall, gun ready','shout "I FINISHED MY MISSION!"','scene33','scene34','scene33');

newTile('34','A Cyborg!','A cyborg comes out of the corner of the hall, and comes running towards you with a tazor and a huge machete. You aim you laser scope at his forehead, but he throws a ninja star at you. Quickly, you kick the star back at him with you karate skills. It penetrates his armor and flesh then he falls to his knees. He takes another and throws it at you. You hit it out of the air again and it cuts him across the wrist.','shoot him!','throw a grenade at him!','go over and give him a bash on the back of the head','scene35','scene36','scene37');

newTile('35','The Cyborg Falls to his knees...','He crumbles to the ground. You go over, disarm him, and handcuff him. You ask him where the suspect is, but he won\'t tell you. he only says he is in the nuclear factory, and that\'s all.','continue. down. the. hall. gun. ready.','continue down, the hall. gun; ready','Continue down the hall, gun ready','scene38','scene38','scene39');

newTile('39','Good. you are good at grammar, it seems.','A device on your belt beeps furiously. You turn around to see a huge mech looking down at you. Quickly, you jump out of the way as a huge plasma bullet falls into where you were just standing. There is no other way to defeat the mech except by shooting a rocket at it, risking blowing up the factory. As you load you rocket launcher and are about to pull the trigger, you see a small pebble fall straight through the mech. You look back at where you were and there is no burnt area where the plasma hit. it is a hollagram. Just to test, you fire a bullet at it, and just as expected, it shoots straight through it without a sound or break.','move on','move on','move on','scene40','scene40','scene40');

newTile('40','The mech is harmless!','The hollagram makes a motion to grab you, but its fingers pass straight through your body. You continue walking down the hall with you gun ready to shoot, and luckily for that, a robot comes out of another twist in the hall.','shoot it','throw a grenade at it','try the gamma ray thingy','scene41','scene23','scene42');

newTile('41','This robot has extra heavy armor!','So, you shoot it again. It brings out its blaster and aims it right at your forehead.','shoot the robot\'s blaster','shoot the robot\'s hand','shoot the robot in what seems like its eye','scene43','scene44','scene45');

newTile('43','The robot\'s blaster explodes in a small pink burst of plasma and fire...',' ...just leaving enough time for you to rain bullets on it. You shoot it a few more times to make sure it is dead and it is. You move down the hall and the nearest enemy you scan is more than 500 feet away from you, so you set to exploring the hall. The hall\'s walls are covered with doors. you try all of them and they all open and are just storage rooms with light bulbs, batteries, and debri in them. There is one more door with a codepad on the side of it. You try that one and it is locked. You put your ear to the door and there is some sort of humming sound in there.','shoot the codepad','pick the lock','kick the door down.','scene46','scene47','scene48');

newTile('46','The codepad breaks down...','...which allows you to enter the room which has no enemies in it. Just a big portal.','shoot a bullet through the portal','go in','gamma-ray it to see what\'s inside','scene49','scene50','scene51');

newTile('47','The door opens with a click...','...which allows you to enter the room which has no enemies in it. Just a big portal.','shoot a bullet through the portal','go in','gamma-ray it to see what\'s inside','scene49','scene50','scene51');

newTile('48','The door crashes down','...which allows you to enter the room which has no enemies in it. Just a big portal.','shoot a bullet through the portal','go in','gamma-ray it to see what\'s inside','scene49','scene50','scene51');

newTile('51','You gamma-ray the portal...','...and see the suspect inside of it. You check his identity and DNA with your spy-tech glasses and sure enough it is him. You shoot him on the leg and jump in. You handcuff him and bring him back to your boss. You later find out that he was trying to blow up The White House with all of the abandoned uranium left there.<hr> Congrats! You Won!!!!!!!!Hope you liked it!','You','Won!','Congrats!','scene52','scene52','scene52');
}

newTile('52','Screenshot this page and send to your DR!','Send to your DR!','.','.','.','scene49','scene50','scene51');

//failures
{
  
fail('49','You end up shooting the suspect...','you hear a groan and a thud from inside the portal and then walk in. You shot the suspect in the head by accident. You failed','restart','restart','retry','scene1','scene1','scene1');
fail('38','Well, well, well...','Bad grammar leads to death. You failed.','don\'t try again','<a href = "https://www.khanacademy.org/humanities/grammar" target = "_blank">take a grammar lesson</a>','die','scene1','','scene1');
fail('18','','Unfortunately, you used it the WRONG way. You failed','start over','retry','restart','scene1','scene1','scene1')
fail('3','Failure','As you try to charm your way in, the guards see through your act and apprehend you. You\'re back at the beginning.','X','start over','restart','scene1','scene1','scene1');
fail('4','Failure!','Your hacking attempt triggers an alarm, and security quickly captures you. You\'re brought back to the starting point.','X','start over','restart','scene1','scene1','scene1');
fail('7','','Your drone is intercepted by anti-drone technology, and guards are alerted to your presence. You\'re back at the beginning.','restart','X','start over','scene1','scene1','scene1');
fail('8','Your hacking attempt fails','Your hacking attempt draws the guards\' attention to your location, and you\'re caught. You\'re brought back to the beginning.','restart','start over','X','scene1','scene1','scene1');
fail('15','You failed...', 'How have you not learned yet that you suck at hacking...Your hacking attempt triggers a security breach alert, and guards converge on your location. You\'re back at the beginning.','X','start over','restart','scene1','scene1','scene1');
fail('17','You died...', 'You encounter a rat in your tunnel. You say hi. It says hi back. Then it eats you.','X','start over','restart','scene1','scene1','scene1')
}
//deaths
{
fail('50','The suspect shoots you','Bam! A straight shot through the eye kills you before you even knew you were in there.','X','restart','retry','scene1','scene1','scene1');
fail('45','That was a false eye!','That, my friend (or enemy) was a light. The real sensor was on the body. It pulls the trigger, blasting the bullet through your head.','restart','start over','random checkpoint','scene1','scene1','scene1');
fail('44','The bullet bounces off the robot\'s hand and it pulls the trigger. You died (with a huge hole in your head).','X','restart','retry','scene1','scene1','scene1');
fail('42','The robot looks as though it is melting...','...and it slowly drips to the floor. Just before its legs completely melt, it shoots you straight through the neck, killing you.','start over','retry','restart','scene1','scene1','scene1');
fail('37','You died!','you apparently didn\'t read properly! the cyborg gets out a tazor and zaps you dead.','start over','retry','revive','scene1','scene1','scene1');
fail('36','Too much explosive power!','This place is an abandoned nuclear factory-- as you might have forgotten... The cyborg dies, the whole place crashes under the grenade\'s power, you die, and trillions of pounds of uranium get ignited. The resulting explosion is devastating.','start over','retry','restart','scene1','scene1','scene1');
fail('33','You Died!','A guy, or what seems like a cyborg, comes out of the corner when he hears you. He zaps you with a tazor and you faint. You wake up and are in a room blindfolded and tied to a chair. He comes over, takes the blindfold off you and blasts you out of the universe with his gun.','X','restart','retry','scene1','scene1','scene1');
fail('31','CAUTION : EXPLODING TURRET!','The turret explodes when you shoot it down the barrel and blasts the whole place apart. You fall into the endlessly deep pit and get blown up by millions of pounds of uranium!','do not try again','don\'t retry','never restart','scene1','scene1','scene1');
fail('29','Too much explosive power',' Sadly, this place is an abandoned nuclear factory, which is not the stablest thing in the world... so... the place cracks under the explosive power and you fall into the hole and get blown up by millions of pounds of uranium.','X','start over','restart','scene1','scene1','scene1');
fail('28','Beware of turret!','A turret, camoflaged, emerges from the wall and blasts the life out of you with a single hit.','start over','retry','restart','scene1','scene1','scene1');
fail('26','Too much explosive power!','First you fire the rocket into the hall, killing all the enemies that you see, then you throw the grenade. Sadly, this place is an abandoned nuclear factory, which is not the stablest thing in the world... so... the place cracks under the explosive power and you fall into the hole and get blown up by millions of pounds of uranium.','start over','restart','retry','scene1','scene1','scene1')
fail('24','Not enough power!','The grenade blows up a few robots, but not all. A few thousand laser bullets cut through you. You died','start over','retry','restart','scene1','scene1','scene1')
fail('23','Boooom!','Unfortunately, you forgot that this was an abandoned nuclear factory. You ignite a few hundred thousand tons of uranium and the whole place explodes.','restart','retry','start over','scene1','scene1','scene1');
fail('21','you died!','You walk carelessly into the hall, and what seems like a million bullets fly through you.','restart','start over','retry','scene1','scene1','scene1');
fail('19','You Choked and died!','The key gets caught in your throat and you choke on it.','X','take the lunatic brain test','restart','scene1','scene1','scene1');
fail('5','You Died!','You barge into the room, triggering an alarm and alerting the guards. You\'re caught and shot in the head.','X','revive','restart','scene1','scene1','scene1');
fail('10','You Died!','Your attempt to force the door draws the attention of guards, and you\'re captured. They are tired of your antics and throw you into the pacific ocean.','X','restart','revive','scene1','scene1','scene1');
fail('12','You Died!','Your lock-picking skills fail - you know good and well you don\'t know how to pick no locks...a guard comes in and shoots you on the spot.','start over','X','revive','scene1','scene1','scene1');
fail('14','You Just Died!','The intruders overpower you, and throw you out a ninth floor window. You a goner.','X','restart','restart','scene1','scene1','scene1');
fail('50','You Just Died!','While using your night vision goggles, you accidentally knock over equipment, revealing your presence. You\'re caught and brought back to the starting point. You a goner.','X','restart','restart','scene1','scene1','scene1');
}
