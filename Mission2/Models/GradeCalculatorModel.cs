using System;
using System.ComponentModel.DataAnnotations;

namespace Mission2.Models
{
    public class GradeCalculatorModel
    {
        [Range(0,100)]
        public int Assignments { get; set; }

        [Range(0, 100)]
        public int Project { get; set; }

        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Range(0, 100)]
        public int Exams { get; set; }

        [Range(0, 100)]
        public int Intex { get; set; }
    }
}
