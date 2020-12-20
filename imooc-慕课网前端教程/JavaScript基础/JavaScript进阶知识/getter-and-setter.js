const student = {
    score: {
        english: 10,
        chinese: 99,
        math: 6,
    },

    // 总分 通过计算得出
    get totalScore() {
        var score = this.score;

        return score.english + score.chinese + score.math;
    },

    set english(value) {
        this.score.english = value;
    },

    set chinese(value) {
        this.score.chinese = value;
    },

    set math(value) {
        this.score.math = value;
    }
};

console.log(student);

student.math = 66;
student.chinese = 150;
student.english = 77;

console.log(student);
console.log(student.totalScore);
