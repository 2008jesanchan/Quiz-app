import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Picker,
  Button,
  TouchableOpacity
} from "react-native";
import { Link } from "react-router-native";
import Question from "../Component/Question"

export default class Csquiz extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      questions: [],

      current: 0,
      correctScore: 5,
      totalScore: 50,

      results: {
        score: 0,
        correctAnswers: 0
      },
      completed: false
    };
  }

  fetchQuestions = async () => {
    await this.setState({ loading: true });
    const response = await fetch(
      `https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple`
    );
    const questions = await response.json();

    const { results } = questions;

    results.forEach(item => {
      item.id = Math.floor(Math.random() * 10000);
    });

    await this.setState({ questions: results, loading: false });
  };

  reset = () => {
    this.setState(
      {
        questions: [],
        current: 0,
        results: {
          score: 0,
          correctAnswers: 0
        },
        completed: false
      },
      () => {
        this.fetchQuestions();
      }
    );
  };

  submitAnswer = (index, answer) => {
    const question = this.state.questions[index];
    const isCorrect = question.correct_answer === answer;
    const results = { ...this.state.results };

    results.score = isCorrect ? results.score + 5 : results.score;
    results.correctAnswers = isCorrect
      ? results.correctAnswers + 1
      : results.correctAnswers;

    this.setState({
      current: index + 1,
      results,
      completed: index === 9 ? true : false
    });
  };

  componentDidMount() {
    this.fetchQuestions();
  }

  render() {
    return (
      <View style={styles.container}>
        {!!this.state.loading && (
          <View style={styles.loadingQuestions}>
            <ActivityIndicator size="large" color="#00ff00" />
            <Text>Please wait while we are loading questions for you</Text>
          </View>
        )}

        {!!this.state.questions.length > 0 &&
          this.state.completed === false && (
            <Question
              onSelect={answer => {
                this.submitAnswer(this.state.current, answer);
              }}
              question={this.state.questions[this.state.current]}
              correctPosition={Math.floor(Math.random() * 3)}
              current={this.state.current}
            />
          )}

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          {this.state.completed === true && (
            <View style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 25 }}>Quiz Completed</Text>
              <Text>Correct Answers: {this.state.results.correctAnswers}</Text>
              <Text>
                Incorrect Answers: {10 - this.state.results.correctAnswers}
              </Text>
              <Text>Total Score: {50}</Text>
              <Text>Obtained Score: {this.state.results.score}</Text>
              <View>
              if(5 + this.state.results.correctAnswers){
              <Text>Well Done</Text>
              }
              else{
            <Text>try again later!</Text>
              }
</View>
              <Button title="Restart Quiz" onPress={this.reset} />
                <Button title="Go Back"  onPress={()=>this.props.navigation.navigate('Home')} />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%"
  },

  loadingQuestions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
