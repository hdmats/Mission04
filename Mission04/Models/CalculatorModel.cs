using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04.Models
{
    public class CalculatorModel
    {
        [Required]
        [Range(0,100, ErrorMessage = "Assignment must be an integer between 0 and 100")]
        public int Assignment { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Group must be an integer between 0 and 100")]
        public int Group { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Quiz must be an integer between 0 and 100")]
        public int Quiz { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Midterm must be an integer between 0 and 100")]
        public int Midterm { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Final must be an integer between 0 and 100")]
        public int Final { get; set; }
        [Required]
        [Range(0, 100, ErrorMessage = "Intex must be an integer between 0 and 100")]
        public int Intex { get; set; }


    }
}
