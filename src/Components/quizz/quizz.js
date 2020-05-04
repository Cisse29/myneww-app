import React from 'react';
import "./quizz.css"

function  Quizz (){

      const quizzes = [
        {
          title: "Add real time updates",
          progress: "in-progress",
          block:" In the US, you can talk to US :interview Kielstart, Teachers are current employees of Google, Facebook,Linkledin",
          score: 49
        },
        {
          title: "Add ability to deplicate data",
          progress: "planned",
          block:
            "Use Facetime to invite friends to a groupe conversation.A lot of people have assumed that by function",
          score: 60
        },
        {
          title: "Export data to CSV and JSON",
          block:
            "Create a moji of yourself or other peopleu want.Actually, there is no single most important function",
          score: 49
        },
        {
          title: "Export data to CSV and JSON",
          block:
            " Create a moji of yourself or other peopleu want.Actually, there is no single most important function",
          score: 20
        },
        {
          title: "Export data to CSV and JSON",
          block:
            " Create a moji of yourself or other peopleu want.Actually, there is no single most important function",
          score: 20
        }
      ];
  
      const callback = props => {
        return (
          <div>
            <div className="quiz-content">
              <div className="score-content">
                <div className="score">{props.score}</div>
              </div>
              <div className="data-content">
                <div className="title">{props.title}</div>
                <div className="progress">{props.progress}</div>
                <div className="block">{props.block}</div>
              </div>
            </div>
          </div>
        );
      };
  
      return(
       <div className="quizz">{
        quizzes.map(callback)}
        </div>
      )
    }
  
  export default Quizz;
  