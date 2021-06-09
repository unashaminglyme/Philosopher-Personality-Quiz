const questions = [
  {
    "question": "You are assigned in a group to make a project in social science about philosophers in general. First order of business is deciding the management of the group: How would the group be led?",
    "answer1": "Obviously, I'm the smartest one in my group, I should lead them..",
    "answer1Total": "P", 
    "answer2": "Psssh.. who needs leaders anyway?",
    "answer2Total": "X", 
    "answer3": "We should compete for the position",
    "answer3Total": "I",
    "answer4": "Let's vote on who can be the leader..",
    "answer4Total": "L"
  },
  {
    "question": "Once the leader was chosen, the direction of the project is now being decided upon. Groupmates have provided different options as to what the project can be. What do you want to see in a project?",
    "answer1": "Something out of the box",
    "answer1Total": "P", 
    "answer2": "Something realistic",
    "answer2Total": "X", 
    "answer3": "Something easy",
    "answer3Total": "L",
    "answer4": "Something big and grand",
    "answer4Total": "I"
  },
  {
    "question": "In looking to start a project, what do you see first?",
    "answer1": "The big picture, then slowly focusing on the details",
    "answer1Total": "P", 
    "answer2": "The details first, eventually piecing them together to form a picture",
    "answer2Total": "L", 
    "answer3": "The final output and the path leading to it",
    "answer3Total": "X",
    "answer4": "How to schedule working on it",
    "answer4Total": "I"
  },
  {
    "question": "In terms of workflow, how do you approach the process?",
    "answer1": "Whatever means, let people work as they want, how they want",
    "answer1Total": "L", 
    "answer2": "Very complex, with many intricacies to ensure the best details",
    "answer2Total": "P", 
    "answer3": "A simple process for easy workflow",
    "answer3Total": "X",
    "answer4": "Do the task as fast as possible",
    "answer4Total": "L"
  },
  {
    "question": "How would you divide the labor among your peers?",
    "answer1": "According to their abilities",
    "answer1Total": "P", 
    "answer2": "Let them decide on what they choose to work in",
    "answer2Total": "L", 
    "answer3": "Micromanage each task at hand",
    "answer3Total": "I",
    "answer4": "All groupmates work on 1 task only, following a process",
    "answer4Total": "X"
  },
  {
    "question": "You came across a crisis, what do you do?",
    "answer1": "All of the groupmates should work together to solve the problem",
    "answer1Total": "X", 
    "answer2": "Why are we here? Just to suffer?",
    "answer2Total": "P", 
    "answer3": "Focus on solving the root of the problem by yourself",
    "answer3Total": "I",
    "answer4": "The best solution is to consult the people",
    "answer4Total": "L"
  },
  {
    "question": "Because of the previous crisis, some groupmates have become unruly of your leadership. What do you do?",
    "answer1": "Quash the mutiny",
    "answer1Total": "I", 
    "answer2": "Talk about their issues in an intellectual manner and negotiate after",
    "answer2Total": "P", 
    "answer3": "Voluntarily step down and bring up another leader",
    "answer3Total": "L",
    "answer4": "Just focus on the work, it's what really matters",
    "answer4Total": "X"
  },
  {
    "question": "A groupmate runs to you for advice and opinions on their work. What do you do?",
    "answer1": "Say words of encouragement",
    "answer1Total": "L", 
    "answer2": "Tell the good news first, then the bad news",
    "answer2Total": "I", 
    "answer3": "Be completely honest about the work, even if it's harsh",
    "answer3Total": "P",
    "answer4": "Tell them to just go back to work",
    "answer4Total": "X"
  },
  {
    "question": "A fight ensues between two groupmates, what do you do?",
    "answer1": "Break the fight and act as a mediator",
    "answer1Total": "P", 
    "answer2": "Let them resolve their problems",
    "answer2Total": "L", 
    "answer3": "Tell them that there are other more important problems to solve than their own",
    "answer3Total": "X",
    "answer4": "Stop the fight using force",
    "answer4Total": "I"
  },
  {
    "question": "Eventually your group gets hungry and orders food, what kind of food do you order?",
    "answer1": "No food",
    "answer1Total": "P", 
    "answer2": "Fancy food, given only to those who did well and none to those who didn't help",
    "answer2Total": "I", 
    "answer3": "A literal feast for sharing",
    "answer3Total": "X",
    "answer4": "Simple takeout food",
    "answer4Total": "L"
  },
  {
    "question": "All of you get tired. What do you do?",
    "answer1": "Tell them to sleep and get rest, while you work",
    "answer1Total": "I", 
    "answer2": "No sleeping and resting until work is done",
    "answer2Total": "X", 
    "answer3": "Tell them to drink coffee",
    "answer3Total": "L",
    "answer4": "Tell them to continue working while you sleep",
    "answer4Total": "P"
  },
  {
    "question": "One person is slacking off and not contributing to the group. What do you do?",
    "answer1": "Wait for the peer evaluation as a punishment",
    "answer1Total": "X", 
    "answer2": "Scold them severely, once",
    "answer2Total": "I", 
    "answer3": "Ask the teacher to not include them in the group",
    "answer3Total": "L",
    "answer4": "Give them the easiest task",
    "answer4Total": "P"
  },
  {
    "question": "You see a groupmate struggling with doing his/her task. What do you do?",
    "answer1": "Help them",
    "answer1Total": "X", 
    "answer2": "Give the job to another group member",
    "answer2Total": "P", 
    "answer3": "Do the task yourself",
    "answer3Total": "I",
    "answer4": "Don't interfere and let them face their problems",
    "answer4Total": "L"
  },
  {
    "question": "A group member just gave the biggest contribution to the group project. What do you do?",
    "answer1": "Give the biggest incentives to him",
    "answer1Total": "I", 
    "answer2": "Acknowledge that his contribution is just as important as others",
    "answer2Total": "X", 
    "answer3": "Reward by giving him/her the hardest task in the project",
    "answer3Total": "P",
    "answer4": "Acknowledge that his big contribution is the achievement of the group as a whole",
    "answer4Total": "X"
  },
  {
    "question": "Peer evaluation comes around after the project submission. How would you rate your members?",
    "answer1": "All of them equally",
    "answer1Total": "L", 
    "answer2": "Most points based on input and ideas",
    "answer2Total": "P", 
    "answer3": "Most points based on output and productivity",
    "answer3Total": "X",
    "answer4": "Most points to yourself",
    "answer4Total": "I"
  }
]
