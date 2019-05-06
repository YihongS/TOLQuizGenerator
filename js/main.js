// $.getJSON("python/test.json", function(json) {
//     console.log(json); // this will show the info it in firebug console
// });

// var testJSON = JSON.parse(answerData);
// console.log(testJSON);

$(document).ready(function(){
	// $.get('./python/correctAnswerByScore.json').done(function(ca) {
	// 	console.log(ca[0])
	// })


	ca = [[1, "He is not doing deliberate practice. B/c there is no feedback provided.", "Reason could be because he didn't get corrective feedback.", "Currently, Rajeev is not receiving feedback and remedial instruction for his work which are an integral part of deliberate practice.", "Because he doesn't have a mentor who diagnoses his problems about painting. He doesn't get immediate feedback and remedial training.", "Rajeev needs expert feedback in order to identify his mistakes and how to correct them.", "Rajeev is getting a lot of practice, but he should ask an art instructor each day for feedback on how well he drew the day\u2019s portrait", "He is not doing deliberate practice. That is, his practice might not be focused on the part that needs improvement, there is no feedback on his performance from experts.", "Rajiv may not know the optimal techniques for drawing because of a lack of explicit instruction, he has no supervision in terms of mistakes that he's making and he gets no feedback or remedial training for the components he's weak at.", "Rajeev is not improving because he is not undergoing deliberate practice. He is drawing alone, which means that one of the conditions of deliberate practice is not being met: he is not being supervised by a teacher to diagnose errors.", "Because he is neither given explicit instruction about the best method, nor supervised by a teacher to diagnose errors and get informative feedback and remedial training. Repeated practice at the same level won't lead to performance.", "First, the instruction of practice might not be the best; Second, he didn't have a teacher monitor his practice; Last, he didn't have informative feedback and remedial training.", "Despite doing so much practice, there is no one to give Rajeev feedback on his errors and remedial training based on that feedback. So while Rajeev is practicing a lot, he is not doing deliberate practice which focuses on correcting his errors and then improving his skill.", "There's no supervision of an external agent so no feedback", "People generally can't improve to a higher level without some figure telling them what that higher level is/looks like. For all we know, Rajeev is drawing stick figures and thinks them pretty good. He needs someone/something to evaluate him and tell him what parts of his portrait need improving on so that he can practice those particular aspects.", "To improve quickly, Rajeev needs deliberate practice, which requires feedbacks.", "because he needs to be supervised by a teacher to diagnose errors", "It's not specific enough. Portraiture could be considered the whole task - there are specific techniques that Rajeev should focus on improving before practicing combining into the whole portrait. (Compare to practicing a putt in golf, not all of golf)", "He doesn't have a teacher who supervises him and diagnoses his errors.", "It might be that there's no informative feedback and remedial training for him to correct his errors and to improve his skill.", "Not receiving immediate feedback may make Rajeev not yield an improvement."], [2, "The feedback needs to be given by an external agent", "no, because he needs an instructor to provide informative feedback", "No. Deliberate practice requires feedback from an external expert, be that a human expert or an agent. Also, he is not making adjustments frequent enough", "no.there's no external resource to provide feedback to him", "No, because deliberate practice requires that an external agent provide feedback to the learner.", "Dan is not engaged in deliberate practice because he is missing expert feedback. He may be unable to precisely diagnose his mistakes and/or to formulate an optimal plan to address them without supervision. Additionally waiting until the next day to address problems undermines his ability to relate errors to corrections and further removes his routine from deliberate practice.", "Dan is not receiving feedback from an external agent as such he may miss errors that he made that someone else might catch. He is also not receiving immediate feedback and both of these things are necessary for deliberate practice. In the options below, I have not selected \"No, because he is not able to practice corrections immediately\" as receiving immediate feedback is not the same as being able to practice corrections on that feedback immediately.", "No, because he doesn't have an external mentor to guide the practice.", "No, Dan is not engaged in deliberate practice because he is nothing supervised by a teacher to diagnose errors. This is an element of the definition of deliberate practice.", "It is. Because it includes practice on a specific skill, supervised by himself, get feedback from himself, and remedial training the next day.", "I don't think so. Because he does not have the expertise to give himself corrective feedback.", "because he is not getting task feedback from an external agent, and he is not able to practice corrections immediately.", "No. He is not supervised by himself to diagnose errors and does not get informative and timely feedback and remedial training.", "Dan is not engaged in deliberate practice because of the following reasons : 1. There is no external agent giving him feedback on what he is doing wrong and how to correct it. (corrective feedback). Some of the errors might not be visible to Dan and so it is important to get that feedback from an external agent like a teacher. 2. Remedial training is effective if it is taken immediately and not after some time of getting immediate feedback from an external agent.", "He did not get external feedback on tasks performance.", "Not exactly. To engage in deliberate practice, one must be given explicit instruction about the best method. Since Dan is simply reflecting on his own method and has never compared it with a best method given to him by an expert, this step is not met. You could perhaps argue that the second component of deliberate practice is met, he is his own teacher and diagnosis his own errors. But without the first point, this is meaningless. Finally, the third part of deliberate practice of getting informative feedback and remedial training could be argued that he's doing this for himself. But again, without being able to compare it with a best method, this is meaningless.", "No, since he receives no feedback on how well he does. Also, the feedback was not immediate.", "No, for he is not supervised and has no instruction from experts.", "No, because there is not an external agent providing instructive and immediate feedback in Dan's practice", "No because, he is lacking (1) explicit instructions about the best method (2) supervised by a teacher to diagnose erorrs because he s diagnosing them himself and (3) immediate feedback as he watched the videos at the end of the day and gives himself feedback", "Dan in this case is not able to practice his corrections at the time the errror is spotted. This is not ideal as golf is not a sport that strains the body heavily and thus, it is not the case unlike powerlifting or bodybuilding where the instance for deliberate practice has a limitation on the amount of activity. Additionally, Dan does not get feedback from an expert instructor. Therefore he may see far fewer errors than an instructor does.", "No, he needs external agent to give informative feedback, as he may be \"unskilled and unaware of it\". Also he needs to receive informative feedback and practise again in a loop which he can not do in the described way.", "Not receiving immediate feedback may make Rajeev not yield an improvement."], [3, "You did a great job putting efforts into practice and it paid off!", "Good job on practicing the right skill!", "Great, you are doing well on this song because of your hard practice. You could do better on other songs and more complex skills if you continue to practice like this.", "Your hard work has paid off! Keep up with the great work!", "You have improved a lot!", "Excellent persistence, keep up the motivation!", "Good job! You could learn songs by practice. Keep on that!", "As Mark has practiced fo long hours, he has probably overcome many difficulties while learning his favorite song. The instructor should point out these difficulties and how Mark overcame them as constructive feedback which can help build the growth-mindset by highlighting that he has already grown from his initial stage.", "You did an excellent job maintaining the right rhythm throughout this song. You've grown tremendously in your skills over the past few days.", "Your persistence in practicing chord changes resulted in you altering this song.", "Congrats Mark! As long as you work hard, you could manage whatever you want! See how much progress you've made!", "you made a great progress and that is due to your efforts, due to what you did rather than who you are.", "Great job. Keep working and putting effort, you will improve more quickly.", "Way to go! You have achieved your goal after diligent practice. Keep up the perseverance and you will learn a lot more in the future!", "When I learned to play, I practiced as hard as you just did, and now I become a guitarist. You'll get there too if you keep practicing hard.", "Citing the recommended paper, \"Growth-mind-set interventions convey that intelligence can grow when students work hard on challenging tasks\u2014and thus that struggle is an opportunity for growth, not a sign that a student is incapable of learning.\" Given that, option C seems correct as it shows that through struggling, Mark managed to improve his ability to keep the right rhythm.", "Amazing job! Great persistent on your learning.", "What a great job that you achieved the goal of playing your favorite song. It is also great for your persistence of learning and practicing.", "Great effort! You persisted even when it was frustrating, and now you can play your favorite song! If you stay determined like that, you can learn to play anything!", "Practice makes perfect!", "Remind him of long term goals, and the growth that is still possible and how his current achievement reflects that. Basically tell him how great he's done and tell him he's going to continue to better in the future.", "Great work, you see, your practice did pay off.", "One of the most important things about growth mindset is giving feedback on the task that Mark is doing and not on his own personality of him being a talented musician. One growth mindset instruction his instructor could give him is \"Great work in your performance today. Keep up with your perseverance.\"", "Good job! Now try this beautiful song song (which is harder)."], [4, "Jigsaw is about collaborative learning and empathy, but not actually about growth mindset.", "No, because it doesn\u2019t implicate how the brain works, and the malleable nature of intelligence. Jigsaw doesn't help students or teachers discover why it works, It doesn't help intelligence either.", "Not really, jigsaw does not help students understand the brain or intelligence which is a prerequisite for a growth mindset.", "No", "I would say no, because growth mindset is an idea that through struggling one can do better and Jigsaw does not really do this. Moreover, students usually misunderstand even why jigsaw works.", "No, because it doesn\u2019t implicate how the brain works, and the malleable nature of intelligence", "No, this was stated in the lecture that Jigsaw is a black box in terms of showing the theory of intelligence", "No, jigsaw doesn't help build a theory of intelligence.", "No, it does not help with the intelligence theory.", "No. Though it teaches the konwlegde in a better way, it does not share any knowledge about mindsets, nor the malleable nature of intelligence.", "Probably not (though it's not impossible). Jigsaw is mostly focused around empathy and interpersonal skills. It does not explicitly teach learners how brains and learning works, which is usually needed to convert students to growth mindsets. Rather, it teaches students that they can work with many different kinds of people, and achieve more than they previously thought (though it doesn't teach them why they can do these things)", "Since the Jigsaw method does not reveal the details of how it is effective, we cannot assess if it actually creates a growth-intelligence mindset as it could also be attributed to a talent in that given domain that was not previously exposed. It could create a growth-intelligence mindset, but it's not a guarantee. Hence, my answer is no.", "No, because usually, students don't realize why it works", "It doesn't show the students that they can grow their skill set by working on them, by practicing them."]];
		console.log(ca[0]);
	ia = [[1, "Even without deliberate practice, Rajeev could improve his skill by practice. If his skill doesn't improve at all, that is not a problem of deliberate practice, it's a problem that he didn't practice the same skill every day. He is not practicing a specific skill (draw the eye of the portrait). Although the lack of feedback is also important, it's more important to focus on the same practice)", "The task of creating a portrait is a complex one and should be studied step by step rather than in full. Hence, Rajeev should identify what parts of the portrait are problematic and practice them regularly instead of drawing new full portrait every day.", "lack of deliberate practice, to say, always practice a general and broad task set without pinpointing where exactly is not good.", "it's not deliberate practice"], [2, "Yes, he has isolated a specific task, practices it repeatedly and reviews his sessions to narrow on improvements."], [3], [4, "Yes indeed! The jigsaw method creates a growth mindset because through the process students are going through walks them through a process in which their own competence is demonstrated back to them and they are supported by the other students on their team. This translates to them feeling their own ability to succeed and increase their intelligence in the future.", "I think it does. Especially for those low-achieving students, Jigsaw enables them to learn from other members (in the expert group as well as Jigsaw group), knowing that they could also learn as well as their peers. Also, as Jigsaw team will rely on one another to learn that part of knowledge, each person will feel that they are making contributions.", "I think so. Because Jigsaw demonstrates to students that they can always learn from other people. What's more, it shows that they can not only learn themselves, but also help other people to improve together.", "Yes, because the Jigsaw methods let even the low-achieving students become expert and help other students. These students will feel they could also achieve better score if they work hard.", "According to the reading, Carlos changed his mindset because his groupmates think he was someone they could work with and someone they could appreciate.", "Yes, because it gives them the confidence that they can master a concept enough to teach others and help others do well when tested on that concept.", "Yes, students are encouraged to learn , express, they are seeing others rely on themselves and see themselves improve.", "Yes, for example carlos, have developed a growth-mindset, while he thought he was stupid he later think he is smart."]];
	qd = [{"Question_type": "MC (Multiple choice)", "Question_id": 1, "Question_text": "Every morning, Rajeev spends an hour alone drawing a portrait from a photograph in the day\u2019s newspaper to improve his portraiture skills (skills drawing a portrait). Yet, despite a year of practice, his drawing skills do not seem to improved. Why might simply practicing a portrait a day not yield an improvement?", "Correct_answer_choice": ["Rajeev is getting a lot of practice, but he should ask an art instructor each day for feedback on how well he drew the day\u2019s portrait"], "Choice_A_text": "Rajeev is getting a lot of practice, but he should ask an art instructor each day for feedback on how well he drew the day\u2019s portrait", "Students_select_A": 20, "Choice_B_text": "Rajeev is practicing different tasks every day, so his practice isn\u2019t deliberate. He should try and draw the same portrait every day", "Students_select_B": 4, "Choice_C_text": "Rajeev is practicing for too short a time. He should practice for a longer period of time", "Students_select_C": 0, "Choice_D_text": "Rajeev\u2019s practice sessions are always in the morning; he should try varying his practice schedule", "Students_select_D": 0}, {"Question_type": "SA (Select all that apply)", "Question_id": 2, "Question_text": "Dan wants to improve his golf game. Every day, he practices one golf stroke for an hour, and records his practice session on video. After his practice, he watches the recording, and plans on what changes to make the next day. Assume he has no other golf instruction. Is Dan engaged in deliberate practice? Why?", "Correct_answer_choice": ["No, because he is not getting task feedback from an external agent", "No, because he is not able to practice corrections immediately (he must wait till the next day)"], "Choice_A_text": "Yes, because he is practicing a specific skill with rich feedback", "Students_select_A": 1, "Choice_B_text": "No, because he is not getting task feedback from an external agent", "Students_select_B": 22, "Choice_C_text": "No, because he is not able to practice corrections immediately (he must wait till the next day)", "Students_select_C": 14, "Choice_D_text": "Yes, because he is practicing a specific skill with knowledge of the results of his previous attempts", "Students_select_D": 2}, {"Question_type": "SA", "Question_id": 3, "Question_text": "Mark is learning to play the guitar. After long hours of practice, he mastered playing his favorite song. Write one growth-mindset building feedback his instructor could give him.", "Correct_answer_choice": ["Great persistent on your learning", "Well done keeping the right rhythm"], "Choice_A_text": "You are a talented musician", "Students_select_A": 1, "Choice_B_text": "Great persistent on your learning", "Students_select_B": 23, "Choice_C_text": "Amazing job!", "Students_select_C": 5, "Choice_D_text": "Well done keeping the right rhythm", "Students_select_D": 3}, {"Question_type": "MC", "Question_id": 4, "Question_text": "Many teachers who have used Jigsaw report that students start to see themselves in a different light -- as more competent, likable, and positive contributors to the classroom. Does the Jigsaw method create a growth-intelligence mindset?", "Correct_answer_choice": ["No, because it doesn\u2019t implicate how the brain works, and the malleable nature of intelligence"], "Choice_A_text": "Yes, because it shows students that they can grow in their abilities", "Students_select_A": 7, "Choice_B_text": "Yes, because it shows students that other students in their group can grow in their abilities", "Students_select_B": 2, "Choice_C_text": "No, because it doesn\u2019t implicate how the brain works, and the malleable nature of intelligence", "Students_select_C": 14, "Choice_D_text": "No, because while it shows students that they can grow abilities in one subject, it leaves them uncertain about whether they can grow abilities in other subjects", "Students_select_D": 1}];
	ad = [{"Answer_text": "it's not deliberate practice", "Question_id": 1, "Student_score_on_question": 0.0, "Student_choice_on_question": "B", "Quiz_score": 6.0, "Average_quizzes_score": 7.8}, {"Answer_text": "Even without deliberate practice, Rajeev could improve his skill by practice. If his skill doesn't improve at all, that is not a problem of deliberate practice, it's a problem that he didn't practice the same skill every day. He is not practicing a specific skill (draw the eye of the portrait). Although the lack of feedback is also important, it's more important to focus on the same practice)", "Question_id": 1, "Student_score_on_question": 0.0, "Student_choice_on_question": "B", "Quiz_score": 8.5, "Average_quizzes_score": 8.0}, {"Answer_text": "The task of creating a portrait is a complex one and should be studied step by step rather than in full. Hence, Rajeev should identify what parts of the portrait are problematic and practice them regularly instead of drawing new full portrait every day.", "Question_id": 1, "Student_score_on_question": 0.0, "Student_choice_on_question": "B", "Quiz_score": 8.0, "Average_quizzes_score": 8.1}, {"Answer_text": "lack of deliberate practice, to say, always practice a general and broad task set without pinpointing where exactly is not good.", "Question_id": 1, "Student_score_on_question": 0.0, "Student_choice_on_question": "B", "Quiz_score": 6.75, "Average_quizzes_score": 6.7}, {"Answer_text": "It's not specific enough. Portraiture could be considered the whole task - there are specific techniques that Rajeev should focus on improving before practicing combining into the whole portrait. (Compare to practicing a putt in golf, not all of golf)", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 6.0, "Average_quizzes_score": 6.8}, {"Answer_text": "People generally can't improve to a higher level without some figure telling them what that higher level is/looks like. For all we know, Rajeev is drawing stick figures and thinks them pretty good. He needs someone/something to evaluate him and tell him what parts of his portrait need improving on so that he can practice those particular aspects.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 6.75, "Average_quizzes_score": 7.2}, {"Answer_text": "First, the instruction of practice might not be the best; Second, he didn't have a teacher monitor his practice; Last, he didn't have informative feedback and remedial training.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 7.0, "Average_quizzes_score": 7.6}, {"Answer_text": "Despite doing so much practice, there is no one to give Rajeev feedback on his errors and remedial training based on that feedback. So while Rajeev is practicing a lot, he is not doing deliberate practice which focuses on correcting his errors and then improving his skill.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 7.0, "Average_quizzes_score": 6.4}, {"Answer_text": "Rajeev needs expert feedback in order to identify his mistakes and how to correct them.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 8.0, "Average_quizzes_score": 7.5}, {"Answer_text": "Rajeev is getting a lot of practice, but he should ask an art instructor each day for feedback on how well he drew the day\u2019s portrait", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 8.0, "Average_quizzes_score": 6.8}, {"Answer_text": "Currently, Rajeev is not receiving feedback and remedial instruction for his work which are an integral part of deliberate practice.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 8.75, "Average_quizzes_score": 8.2}, {"Answer_text": "He is not doing deliberate practice. That is, his practice might not be focused on the part that needs improvement, there is no feedback on his performance from experts.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 8.0, "Average_quizzes_score": 7.3}, {"Answer_text": "Because he doesn't have a mentor who diagnoses his problems about painting. He doesn't get immediate feedback and remedial training.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 8.75, "Average_quizzes_score": 7.7}, {"Answer_text": "He doesn't have a teacher who supervises him and diagnoses his errors.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 6.0, "Average_quizzes_score": 7.0}, {"Answer_text": "Rajiv may not know the optimal techniques for drawing because of a lack of explicit instruction, he has no supervision in terms of mistakes that he's making and he gets no feedback or remedial training for the components he's weak at.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 8.0, "Average_quizzes_score": 7.1}, {"Answer_text": "Rajeev is not improving because he is not undergoing deliberate practice. He is drawing alone, which means that one of the conditions of deliberate practice is not being met: he is not being supervised by a teacher to diagnose errors.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 8.0, "Average_quizzes_score": 8.1}, {"Answer_text": "It might be that there's no informative feedback and remedial training for him to correct his errors and to improve his skill.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 6.0, "Average_quizzes_score": 7.3}, {"Answer_text": "Because he is neither given explicit instruction about the best method, nor supervised by a teacher to diagnose errors and get informative feedback and remedial training. Repeated practice at the same level won't lead to performance.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 7.75, "Average_quizzes_score": 6.8}, {"Answer_text": "He is not doing deliberate practice. B/c there is no feedback provided.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 10.0, "Average_quizzes_score": 8.3}, {"Answer_text": "To improve quickly, Rajeev needs deliberate practice, which requires feedbacks.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 6.75, "Average_quizzes_score": 7.0}, {"Answer_text": "There's no supervision of an external agent so no feedback", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 7.0, "Average_quizzes_score": 7.6}, {"Answer_text": "Reason could be because he didn't get corrective feedback.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 9.75, "Average_quizzes_score": 7.7}, {"Answer_text": "because he needs to be supervised by a teacher to diagnose errors", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 6.75, "Average_quizzes_score": 6.9}, {"Answer_text": "Not receiving immediate feedback may make Rajeev not yield an improvement.", "Question_id": 1, "Student_score_on_question": 1.0, "Student_choice_on_question": "A", "Quiz_score": 4.75, "Average_quizzes_score": 6.7}, {"Answer_text": "Yes, he has isolated a specific task, practices it repeatedly and reviews his sessions to narrow on improvements.", "Question_id": 2, "Student_score_on_question": 0.0, "Student_choice_on_question": "A, D", "Quiz_score": 6.0, "Average_quizzes_score": 6.8}, {"Answer_text": "No, because deliberate practice requires that an external agent provide feedback to the learner.", "Question_id": 2, "Student_score_on_question": 0.5, "Student_choice_on_question": "C, D", "Quiz_score": 8.5, "Average_quizzes_score": 8.0}, {"Answer_text": "Not exactly. To engage in deliberate practice, one must be given explicit instruction about the best method. Since Dan is simply reflecting on his own method and has never compared it with a best method given to him by an expert, this step is not met. You could perhaps argue that the second component of deliberate practice is met, he is his own teacher and diagnosis his own errors. But without the first point, this is meaningless. Finally, the third part of deliberate practice of getting informative feedback and remedial training could be argued that he's doing this for himself. But again, without being able to compare it with a best method, this is meaningless.", "Question_id": 2, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 6.75, "Average_quizzes_score": 7.2}, {"Answer_text": "No. Deliberate practice requires feedback from an external expert, be that a human expert or an agent. Also, he is not making adjustments frequent enough", "Question_id": 2, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 8.75, "Average_quizzes_score": 8.2}, {"Answer_text": "no.there's no external resource to provide feedback to him", "Question_id": 2, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 8.75, "Average_quizzes_score": 7.7}, {"Answer_text": "because he is not getting task feedback from an external agent, and he is not able to practice corrections immediately.", "Question_id": 2, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 7.75, "Average_quizzes_score": 6.8}, {"Answer_text": "No, since he receives no feedback on how well he does. Also, the feedback was not immediate.", "Question_id": 2, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 6.75, "Average_quizzes_score": 7.0}, {"Answer_text": "no, because he needs an instructor to provide informative feedback", "Question_id": 2, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 9.75, "Average_quizzes_score": 7.7}, {"Answer_text": "No, for he is not supervised and has no instruction from experts.", "Question_id": 2, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 6.75, "Average_quizzes_score": 6.9}, {"Answer_text": "No, because there is not an external agent providing instructive and immediate feedback in Dan's practice", "Question_id": 2, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 6.75, "Average_quizzes_score": 6.7}, {"Answer_text": "Not receiving immediate feedback may make Rajeev not yield an improvement.", "Question_id": 2, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 4.75, "Average_quizzes_score": 6.7}, {"Answer_text": "No. He is not supervised by himself to diagnose errors and does not get informative and timely feedback and remedial training.", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 7.0, "Average_quizzes_score": 7.6}, {"Answer_text": "Dan is not engaged in deliberate practice because of the following reasons : 1. There is no external agent giving him feedback on what he is doing wrong and how to correct it. (corrective feedback). Some of the errors might not be visible to Dan and so it is important to get that feedback from an external agent like a teacher. 2. Remedial training is effective if it is taken immediately and not after some time of getting immediate feedback from an external agent.", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 7.0, "Average_quizzes_score": 6.4}, {"Answer_text": "Dan is not engaged in deliberate practice because he is missing expert feedback. He may be unable to precisely diagnose his mistakes and/or to formulate an optimal plan to address them without supervision. Additionally waiting until the next day to address problems undermines his ability to relate errors to corrections and further removes his routine from deliberate practice.", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 8.0, "Average_quizzes_score": 7.5}, {"Answer_text": "Dan is not receiving feedback from an external agent as such he may miss errors that he made that someone else might catch. He is also not receiving immediate feedback and both of these things are necessary for deliberate practice. In the options below, I have not selected \"No, because he is not able to practice corrections immediately\" as receiving immediate feedback is not the same as being able to practice corrections on that feedback immediately.", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 8.0, "Average_quizzes_score": 6.8}, {"Answer_text": "No, because he doesn't have an external mentor to guide the practice.", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 8.0, "Average_quizzes_score": 7.3}, {"Answer_text": "No because, he is lacking (1) explicit instructions about the best method (2) supervised by a teacher to diagnose erorrs because he s diagnosing them himself and (3) immediate feedback as he watched the videos at the end of the day and gives himself feedback", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 6.0, "Average_quizzes_score": 7.8}, {"Answer_text": "Dan in this case is not able to practice his corrections at the time the errror is spotted. This is not ideal as golf is not a sport that strains the body heavily and thus, it is not the case unlike powerlifting or bodybuilding where the instance for deliberate practice has a limitation on the amount of activity. Additionally, Dan does not get feedback from an expert instructor. Therefore he may see far fewer errors than an instructor does.", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 6.0, "Average_quizzes_score": 7.0}, {"Answer_text": "No, Dan is not engaged in deliberate practice because he is nothing supervised by a teacher to diagnose errors. This is an element of the definition of deliberate practice.", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 8.0, "Average_quizzes_score": 7.1}, {"Answer_text": "It is. Because it includes practice on a specific skill, supervised by himself, get feedback from himself, and remedial training the next day.", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 8.0, "Average_quizzes_score": 8.1}, {"Answer_text": "No, he needs external agent to give informative feedback, as he may be \"unskilled and unaware of it\". Also he needs to receive informative feedback and practise again in a loop which he can not do in the described way.", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 6.0, "Average_quizzes_score": 7.3}, {"Answer_text": "I don't think so. Because he does not have the expertise to give himself corrective feedback.", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 8.0, "Average_quizzes_score": 8.1}, {"Answer_text": "The feedback needs to be given by an external agent", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 10.0, "Average_quizzes_score": 8.3}, {"Answer_text": "He did not get external feedback on tasks performance.", "Question_id": 2, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, C", "Quiz_score": 7.0, "Average_quizzes_score": 7.6}, {"Answer_text": "Remind him of long term goals, and the growth that is still possible and how his current achievement reflects that. Basically tell him how great he's done and tell him he's going to continue to better in the future.", "Question_id": 3, "Student_score_on_question": 0.5, "Student_choice_on_question": "A, B", "Quiz_score": 6.0, "Average_quizzes_score": 7.0}, {"Answer_text": "Great work, you see, your practice did pay off.", "Question_id": 3, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 6.0, "Average_quizzes_score": 7.2}, {"Answer_text": "One of the most important things about growth mindset is giving feedback on the task that Mark is doing and not on his own personality of him being a talented musician. One growth mindset instruction his instructor could give him is \"Great work in your performance today. Keep up with your perseverance.\"", "Question_id": 3, "Student_score_on_question": 0.75, "Student_choice_on_question": "A, C, D", "Quiz_score": 6.0, "Average_quizzes_score": 6.4}, {"Answer_text": "Great job. Keep working and putting effort, you will improve more quickly.", "Question_id": 3, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 7.0, "Average_quizzes_score": 6.8}, {"Answer_text": "Way to go! You have achieved your goal after diligent practice. Keep up the perseverance and you will learn a lot more in the future!", "Question_id": 3, "Student_score_on_question": 0.75, "Student_choice_on_question": "B, C, D", "Quiz_score": 7.0, "Average_quizzes_score": 7.3}, {"Answer_text": "You did a great job putting efforts into practice and it paid off!", "Question_id": 3, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 9.0, "Average_quizzes_score": 7.7}, {"Answer_text": "When I learned to play, I practiced as hard as you just did, and now I become a guitarist. You'll get there too if you keep practicing hard.", "Question_id": 3, "Student_score_on_question": 0.75, "Student_choice_on_question": "B", "Quiz_score": 7.0, "Average_quizzes_score": 7.3}, {"Answer_text": "Citing the recommended paper, \"Growth-mind-set interventions convey that intelligence can grow when students work hard on challenging tasks\u2014and thus that struggle is an opportunity for growth, not a sign that a student is incapable of learning.\" Given that, option C seems correct as it shows that through struggling, Mark managed to improve his ability to keep the right rhythm.", "Question_id": 3, "Student_score_on_question": 0.75, "Student_choice_on_question": "D", "Quiz_score": 7.0, "Average_quizzes_score": 8.1}, {"Answer_text": "Amazing job! Great persistent on your learning.", "Question_id": 3, "Student_score_on_question": 0.75, "Student_choice_on_question": "B, C", "Quiz_score": 7.0, "Average_quizzes_score": 8.3}, {"Answer_text": "You have improved a lot!", "Question_id": 3, "Student_score_on_question": 0.75, "Student_choice_on_question": "B, C", "Quiz_score": 8.0, "Average_quizzes_score": 7.7}, {"Answer_text": "What a great job that you achieved the goal of playing your favorite song. It is also great for your persistence of learning and practicing.", "Question_id": 3, "Student_score_on_question": 0.75, "Student_choice_on_question": "B, C", "Quiz_score": 7.0, "Average_quizzes_score": 6.7}, {"Answer_text": "Excellent persistence, keep up the motivation!", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 8.0, "Average_quizzes_score": 6.8}, {"Answer_text": "Good job! You could learn songs by practice. Keep on that!", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 8.0, "Average_quizzes_score": 7.6}, {"Answer_text": "Great effort! You persisted even when it was frustrating, and now you can play your favorite song! If you stay determined like that, you can learn to play anything!", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 7.0, "Average_quizzes_score": 7.5}, {"Answer_text": "As Mark has practiced fo long hours, he has probably overcome many difficulties while learning his favorite song. The instructor should point out these difficulties and how Mark overcame them as constructive feedback which can help build the growth-mindset by highlighting that he has already grown from his initial stage.", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 8.0, "Average_quizzes_score": 8.2}, {"Answer_text": "Good job on practicing the right skill!", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 9.0, "Average_quizzes_score": 7.8}, {"Answer_text": "You did an excellent job maintaining the right rhythm throughout this song. You've grown tremendously in your skills over the past few days.", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 8.0, "Average_quizzes_score": 7.1}, {"Answer_text": "Your persistence in practicing chord changes resulted in you altering this song.", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 8.0, "Average_quizzes_score": 8.1}, {"Answer_text": "Great, you are doing well on this song because of your hard practice. You could do better on other songs and more complex skills if you continue to practice like this.", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 9.0, "Average_quizzes_score": 8.0}, {"Answer_text": "Congrats Mark! As long as you work hard, you could manage whatever you want! See how much progress you've made!", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 8.0, "Average_quizzes_score": 6.8}, {"Answer_text": "Good job! Now try this beautiful song song (which is harder).", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 6.0, "Average_quizzes_score": 7.0}, {"Answer_text": "Your hard work has paid off! Keep up with the great work!", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 9.0, "Average_quizzes_score": 7.6}, {"Answer_text": "Practice makes perfect!", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 7.0, "Average_quizzes_score": 6.9}, {"Answer_text": "you made a great progress and that is due to your efforts, due to what you did rather than who you are.", "Question_id": 3, "Student_score_on_question": 1.0, "Student_choice_on_question": "B, D", "Quiz_score": 8.0, "Average_quizzes_score": 6.7}, {"Answer_text": "No, this was stated in the lecture that Jigsaw is a black box in terms of showing the theory of intelligence", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 8.25, "Average_quizzes_score": 7.2}, {"Answer_text": "No, jigsaw doesn't help build a theory of intelligence.", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 8.0, "Average_quizzes_score": 7.6}, {"Answer_text": "It doesn't show the students that they can grow their skill set by working on them, by practicing them.", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 6.75, "Average_quizzes_score": 6.4}, {"Answer_text": "Probably not (though it's not impossible). Jigsaw is mostly focused around empathy and interpersonal skills. It does not explicitly teach learners how brains and learning works, which is usually needed to convert students to growth mindsets. Rather, it teaches students that they can work with many different kinds of people, and achieve more than they previously thought (though it doesn't teach them why they can do these things)", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 7.75, "Average_quizzes_score": 7.5}, {"Answer_text": "Not really, jigsaw does not help students understand the brain or intelligence which is a prerequisite for a growth mindset.", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 9.5, "Average_quizzes_score": 8.2}, {"Answer_text": "No, because it doesn\u2019t implicate how the brain works, and the malleable nature of intelligence", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 8.5, "Average_quizzes_score": 7.3}, {"Answer_text": "I think so. Because Jigsaw demonstrates to students that they can always learn from other people. What's more, it shows that they can not only learn themselves, but also help other people to improve together.", "Question_id": 4, "Student_score_on_question": 0.0, "Student_choice_on_question": "A", "Quiz_score": 7.25, "Average_quizzes_score": 7.7}, {"Answer_text": "No", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 8.75, "Average_quizzes_score": 7.8}, {"Answer_text": "Yes, because it gives them the confidence that they can master a concept enough to teach others and help others do well when tested on that concept.", "Question_id": 4, "Student_score_on_question": 0.0, "Student_choice_on_question": "A", "Quiz_score": 8.0, "Average_quizzes_score": 7.0}, {"Answer_text": "Since the Jigsaw method does not reveal the details of how it is effective, we cannot assess if it actually creates a growth-intelligence mindset as it could also be attributed to a talent in that given domain that was not previously exposed. It could create a growth-intelligence mindset, but it's not a guarantee. Hence, my answer is no.", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 7.75, "Average_quizzes_score": 7.1}, {"Answer_text": "Yes indeed! The jigsaw method creates a growth mindset because through the process students are going through walks them through a process in which their own competence is demonstrated back to them and they are supported by the other students on their team. This translates to them feeling their own ability to succeed and increase their intelligence in the future.", "Question_id": 4, "Student_score_on_question": 0.0, "Student_choice_on_question": "A", "Quiz_score": 7.5, "Average_quizzes_score": 8.1}, {"Answer_text": "Yes, students are encouraged to learn , express, they are seeing others rely on themselves and see themselves improve.", "Question_id": 4, "Student_score_on_question": 0.0, "Student_choice_on_question": "B", "Quiz_score": 8.0, "Average_quizzes_score": 8.0}, {"Answer_text": "No, because usually, students don't realize why it works", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 7.75, "Average_quizzes_score": 7.3}, {"Answer_text": "I would say no, because growth mindset is an idea that through struggling one can do better and Jigsaw does not really do this. Moreover, students usually misunderstand even why jigsaw works.", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 8.75, "Average_quizzes_score": 8.1}, {"Answer_text": "I think it does. Especially for those low-achieving students, Jigsaw enables them to learn from other members (in the expert group as well as Jigsaw group), knowing that they could also learn as well as their peers. Also, as Jigsaw team will rely on one another to learn that part of knowledge, each person will feel that they are making contributions.", "Question_id": 4, "Student_score_on_question": 0.0, "Student_choice_on_question": "A", "Quiz_score": 7.0, "Average_quizzes_score": 6.8}, {"Answer_text": "No, because it doesn\u2019t implicate how the brain works, and the malleable nature of intelligence. Jigsaw doesn't help students or teachers discover why it works, It doesn't help intelligence either.", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 9.75, "Average_quizzes_score": 8.3}, {"Answer_text": "Yes, because the Jigsaw methods let even the low-achieving students become expert and help other students. These students will feel they could also achieve better score if they work hard.", "Question_id": 4, "Student_score_on_question": 0.0, "Student_choice_on_question": "A", "Quiz_score": 6.0, "Average_quizzes_score": 7.0}, {"Answer_text": "No, it does not help with the intelligence theory.", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 8.0, "Average_quizzes_score": 7.6}, {"Answer_text": "Yes, for example carlos, have developed a growth-mindset, while he thought he was stupid he later think he is smart.", "Question_id": 4, "Student_score_on_question": 0.0, "Student_choice_on_question": "A", "Quiz_score": 6.5, "Average_quizzes_score": 7.7}, {"Answer_text": "According to the reading, Carlos changed his mindset because his groupmates think he was someone they could work with and someone they could appreciate.", "Question_id": 4, "Student_score_on_question": 0.0, "Student_choice_on_question": "B", "Quiz_score": 7.75, "Average_quizzes_score": 6.9}, {"Answer_text": "No. Though it teaches the konwlegde in a better way, it does not share any knowledge about mindsets, nor the malleable nature of intelligence.", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 8.0, "Average_quizzes_score": 6.7}, {"Answer_text": "Jigsaw is about collaborative learning and empathy, but not actually about growth mindset.", "Question_id": 4, "Student_score_on_question": 1.0, "Student_choice_on_question": "C", "Quiz_score": 10.0, "Average_quizzes_score": 6.7}];


	let countQ = 0;
	// read current correctOptions from the correctResponses[countQ] array ***
	let correctOptions = qd[countQ]["Correct_answer_choice"];
	console.log(correctOptions);
	let optionChose = [];
	let questionCorrect = [];
	let answeredCorrect = [];
	let choseOptionNotCorrectLetters = [];
	let correctOptionNotChoseLetters = [];


	let qPrompts = qd[countQ]["Question_text"]
	let oa = qd[countQ]["Choice_A_text"]
	let ob = qd[countQ]["Choice_B_text"]
	let oc = qd[countQ]["Choice_C_text"]
	let od = qd[countQ]["Choice_D_text"]
	let thisIncorOpt = [];
	let thisCorOpt = [];
	let hasAdded = false
	initializeQuestion()
	changeQuestion()

	function initializeQuestion(){
		console.log("initialized the question")
		optionChose = [];
		thisIncorOpt = []
		thisCorOpt = []
		answeredCorrect = [];
		$('.option').removeClass('checked correct-choice incorrect-choice')
		$('#scene-feedback').hide()
	}

	function changeQuestion(){
		console.log("changeQuestion!!",countQ,qd[countQ])
		correctOptions = qd[countQ]["Correct_answer_choice"];
		qPrompts = qd[countQ]["Question_text"]
		oa = qd[countQ]["Choice_A_text"]
		ob = qd[countQ]["Choice_B_text"]
		oc = qd[countQ]["Choice_C_text"]
		od = qd[countQ]["Choice_D_text"]
		$('.questionPrompt').text(qPrompts)
		$('#optionA').text(oa)
		$('#optionB').text(ob)
		$('#optionC').text(oc)
		$('#optionD').text(od)
		hasAdded = false
	}


	// Define current Choice
	$('.option').click(function (){
		console.log("clicked text is " + $(this).text());
		// if the clicked option is previously checked, remove it
		if (optionChose.includes($(this).text())) {
			$(this).removeClass('checked');
			// remove the chose option from the optionChose array
			let index = optionChose.indexOf($(this).text());
			if (index > -1) {
			  optionChose.splice(index, 1);
			}
		}
		// if the clicked option is not previously checked, check it
		else {
			optionChose.push($(this).text());
			$(this).addClass('checked')
		}
		console.log(optionChose);
	})


	// Check if the chosen options are correct
	function checkCorrect(){
		// default setting is true
		questionCorrect[countQ] = true;
		// check if the option chosen are correct
		$.each(optionChose, function( i, v ) {
			if (correctOptions.includes(v)) {
				answeredCorrect[i] = true;
			}
			else {
				answeredCorrect[i] = false;
				questionCorrect[countQ] = false;
			}
		})

		// check if all correct options are chosen
		$.each(correctOptions, function( i, v ) {
			if (!optionChose.includes(v)) {
				questionCorrect[countQ] = false;
			}
		})
	}

	function giveFeedback(){
		// if the student got it correct
		if (questionCorrect[countQ]) {
			$('.correctness').text('Correct! Your hardwork of studying has paid off, now let’s go on to the next question! Keep up with the good rhythm!')
		}
		else {
			$('.correctness').text("Not correct. Let's try again! Do you know that your brain will become stronger when you practivce it? Keep up with the good rhythm!")
			correctiveFeedbacks()
		}
	}

	function correctiveFeedbacks(){
		findOptionLetter()
		let correct = correctOptionNotChoseLetters.join(", ")
		let incorrect = choseOptionNotCorrectLetters.join(", ")
		if (correct) {
			if (correctOptionNotChoseLetters.length == 1) {
				$('.correctness').append("<p class = 'feedback corrective-correct'>You didn't choose the correct option " + correct + "</p>")
			} else {
				$('.correctness').append("<p class = 'feedback corrective-correct'>You didn't choose the correct options " + correct + "</p>")
			}
			// $('.correctness').append("<p class = 'feedback corrective-correct'>You didn't choose the correct option(s) " + correct + "</p>")
		}
		if (incorrect) {
			if (choseOptionNotCorrectLetters.length == 1) {
				$('.correctness').append("<p class = 'feedback corrective-wrong'>the option " + incorrect + " you chose is wrong</p>")
			} else {
				$('.correctness').append("<p class = 'feedback corrective-wrong'>the options " + incorrect + " you chose are wrong</p>")
			}
			// $('.correctness').append("<p class = 'feedback corrective-wrong'>the option(s) " + incorrect + " you chose is/are wrong</p>")
		}
	}

	function changeOptionColors() {
		$('.option').each(function(){
			if (correctOptions.includes($(this).text())) {
				$(this).addClass("correct-choice")
				// console.log($(this).text()+'is the correct choice')
			}
			else{
				$(this).addClass("incorrect-choice")
				// let optionToPush = $(this).siblings('.option-letter').text()
				// ChoseOptionNotCorrectLetters.push(optionToPush)
				// console.log("ChoseOptionNotCorrectLetters is ", ChoseOptionNotCorrectLetters)
				// console.log('else')
			}
		})
	}

	function findOptionLetter() {
		$('.option').each(function(){
			let optionToPush
			// console.log("correctOptions= ",correctOptions)
			// console.log("optionChoses= ",optionChose)
			// console.log("$(this).text()= ",$(this).text())
			// console.log("correctOptions.includes($(this).text()) is true??: ",correctOptions.includes($(this).text()))
			// console.log("optionChose.includes($(this).text()) is true??: ",optionChose.includes($(this).text()))

			// if this is a corect option and the learner didn't choose
			if ((correctOptions.includes($(this).text())) && (!optionChose.includes($(this).text()))) {
				optionToPush = $(this).siblings('.option-letter').text()
				correctOptionNotChoseLetters.push(optionToPush)
				// console.log($(this).text()+'is the correct choice')
			}
			// if chosen answer is incorrect
			else if (!correctOptions.includes($(this).text()) && (optionChose.includes($(this).text()))) {
				optionToPush = $(this).siblings('.option-letter').text()
				choseOptionNotCorrectLetters.push(optionToPush)
				// console.log("should have added to choseOptionNotCorrectLetters")
			}
			else{
				// console.log("not find anything")
			}
			// {
			// 	$(this).addClass("incorrect-choice")
			// 	optionToPush = $(this).siblings('.option-letter').text()
			// 	ChoseOptionNotCorrectLetters.push(optionToPush)
			// 	console.log("ChoseOptionNotCorrectLetters is ", ChoseOptionNotCorrectLetters)
			// 	// console.log('else')
			// }
		})
	}

	function shuffle(array) {
	  var currentIndex = array.length, temporaryValue, randomIndex;

	  // While there remain elements to shuffle...
	  while (0 !== currentIndex) {

	    // Pick a remaining element...
	    randomIndex = Math.floor(Math.random() * currentIndex);
	    currentIndex -= 1;

	    // And swap it with the current element.
	    temporaryValue = array[currentIndex];
	    array[currentIndex] = array[randomIndex];
	    array[randomIndex] = temporaryValue;
	  }

	  return array;
	}
	//@@kx function
	function changeOptions() {
    // if current question == answerpool's first element-> question number
    var numTotalQues = ca.length
		console.log("enter function change option", numTotalQues)
    for (i = 0; i < numTotalQues; i++) {
			console.log("i "+ i)
      console.log("NOWWW what is i", i, 'CA[i][0]= ', ca[i][0], "countQ= ", countQ, " length of ca[i] "+ca[i].length )
			console.log("NOWWW what is i", i, 'IA[i][0]= ', ia[i][0], "countQ= ", countQ,"length of ia[i] " + ia[i].length)

      if (countQ == ia[i][0] - 1) {
				console.log("ca[i].length<3", ca[i].length<3,"ia[i].length<2", ia[i].length<2 )
          // if incorrect answer >= 3, randomly select 0,1,2,3 of incorrect answer
        if (ia[i].length >= 4) {
          console.log("It is over 3!")
					// random 0,1,2,3
          numIncorOpt = Math.floor(Math.random() * 4)
          console.log("random chose incorrect tobe number ", numIncorOpt)
          numCorOpt = 4 - numIncorOpt
          // need to pick out (numIncorOpt) of incorrect answers from the pool, put them in the pool of thisIncor and thisCor
          var j;
          for (j = 1; j <= numIncorOpt; j++) {
              thisIncorOpt.push(ia[i][j])
              console.log("I pushed" + ia[i][j] + "to the this incorrect option")
              console.log("this is the incorrect option for this question" + thisIncorOpt)
          }
          var k;
          for (k = 1; k <= numCorOpt; k++) {
              thisCorOpt.push(ca[i][k])
							console.log("@@@@@@@this is the correct option for this question" + thisCorOpt)
              console.log("I pushed" + ca[i][k] + "to the this correct option")
              //console.log("xxx",Array.isArray(thisCorOpt))
              //console.log("this is the first correct option for this question"+thisCorOpt[0])
              //console.log("this is the second correct option for this question"+thisCorOpt[1])
          }
          //need to delete the used options
					console.log("before splice"+ia)
          ia[i].splice(1, numIncorOpt)
					console.log("after splice"+ia)
          ca[i].splice(1, numCorOpt)
          //add the incorrect and correct options in this question to an array named thisOptions
          var thisOptions = []
					console.log("thisIncooooo", thisIncorOpt)
          thisOptions = thisIncorOpt.concat(thisCorOpt)
					console.log("length of thisOptions",thisOptions.length)
          console.log("unshuffled" + thisOptions)
          //shuffle the array named thisOptions
          thisOptions = shuffle(thisOptions)
          console.log("shuffled" + thisOptions)
					console.log("thisOptions[0]= ",thisOptions[0])
          // map that to the html element
          $("#optionA").text(thisOptions[0])
          $("#optionB").text(thisOptions[1])
          $("#optionC").text(thisOptions[2])
          $("#optionD").text(thisOptions[3])
          // now which is correct?
          correctOptions = thisCorOpt
          //console.log("IN CHANGE OPTION function", correctOptions)
        }
        //There are not enough incorrect answers in the pool!
        else {
        	if(!hasAdded){
        		console.log("hasAdded=",hasAdded," go to push")
						pushOriginal()
					}
					if ((ca[i].length<3) || (ia[i].length<2)) {
        		countQ+=1;changeQuestion();console.log("GOING TO return!");return
						console.log("you got the question wrong, gonna change options now:>=4?????:",ia[i].length)
        	}


        	thisIncorOpt = []
					thisCorOpt = []
					numIncorOpt = Math.floor(Math.random() * 2)
          console.log("random chose incorrect to be number ", numIncorOpt)
          numCorOpt = 4 - numIncorOpt
          // need to pick out (numIncorOpt) of incorrect answers from the pool, put them in the pool of thisIncor and thisCor
          var j;
					//~
          // if they are not correct answers, add them to the original incorrect answer list
          for (j = 1; j <= numIncorOpt; j++) {
						thisIncorOpt.push(ia[i][j])
					}
					var k;
					for (k = 1; k <= numCorOpt; k++) {
						thisCorOpt.push(ca[i][k])
						console.log("I pushed" + ca[i][k] + "to the this correct option")
						//console.log("xxx",Array.isArray(thisCorOpt))
						//console.log("this is the first correct option for this question"+thisCorOpt[0])
						//console.log("this is the second correct option for this question"+thisCorOpt[1])
					}
					//need to delete the used options
					ia[i].splice(1, numIncorOpt)
					ca[i].splice(1, numCorOpt)
					//add the incorrect and correct options in this question to an array named thisOptions
					var thisOptions = []
					console.log("thisIncooooo_else", thisIncorOpt)
					thisOptions = thisIncorOpt.concat(thisCorOpt)
					console.log("unshuffled" + thisOptions)
					//shuffle the array named thisOptions
					thisOptions = shuffle(thisOptions)
					console.log("shuffled" + thisOptions,"length=",thisOptions.length)
					// map that to the html element
					$("#optionA").text(thisOptions[0])
					$("#optionB").text(thisOptions[1])
					$("#optionC").text(thisOptions[2])
					$("#optionD").text(thisOptions[3])
					correctOptions = thisCorOpt
      	}
  		}
    }
  }

	function pushOriginal(){
		correctOptions = qd[countQ]["Correct_answer_choice"]
		console.log("There are not enough incorrect answers in the pool, so we will use the original ones.")

		var oriIncorrectAnswers = [];
		console.log("correct_answer_choice_original", correctOptions)
		if (!correctOptions.includes(oa)) {
			oriIncorrectAnswers.push(oa)
		}
		if (!correctOptions.includes(ob)) {
			oriIncorrectAnswers.push(ob)
		}
		if (!correctOptions.includes(oc)) {
			oriIncorrectAnswers.push(oc)
		}
		if (!correctOptions.includes(od)) {
			oriIncorrectAnswers.push(od)
		}
		// push each of them to the ia list for this question
		$.each(oriIncorrectAnswers, function (z, v) {
			ia[i].push(v)
			//thisIncorOpt.push(ia[i])
			console.log("I pushed" + ia[i] + "to the this incorrect option")
			console.log("this is the incorrect option for this question" + thisIncorOpt)
		})
		hasAdded = true;
	}

	function continueScene(el) {
	  var next = $(el).data('next');
	  console.log(next);
	  // $(el).parent('.scene').fadeOut();
	  $(next).fadeIn();
	}

	$('.btn_submit').click(function (){
		checkCorrect();
		console.log("question correct: " + questionCorrect[countQ])
		continueScene(this)
		console.log('go to feedback')
		changeOptionColors()
		giveFeedback()
		console.log("question correct: " + typeof questionCorrect+" "+questionCorrect)
	})

	$('.btn_next_question').click(function (){
		initializeQuestion()
		// ATTENTION! now it will change question no matter correct or incorrect! NEED TO BE CHANGE!!!!
		console.log("countQ= ",countQ)
		console.log("questionCorrect[countQ]= ",questionCorrect[countQ])
		console.log("questionCorrect= ",questionCorrect)
		//@@kx
		if (questionCorrect[countQ]==false){
			//console.log('kkkkkkk'+questionCorrect[countQ-1]);
			changeOptions()
		}
		//@@kx
		else {
			countQ+=1
			console.log("AAAAAAAAAAAAAAAAAA you are right, now come to question", countQ)
			//if (countQ==0){countQ+= 1}
			//countQ += 1
			changeQuestion()
		}
		continueScene(this)
		console.log('back to question')
	})

	// $(".questionPrompt").text(qPrompts)

	// function changeOption(){
	// 	$("#optionA").text(oa)
	// 	$("#optionB").text(ob)
	// 	$("#optionC").text(oc)
	// 	$("#optionD").text(od)
	// }
	// changeOption()
})
