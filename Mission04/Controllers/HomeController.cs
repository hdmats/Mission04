using Microsoft.AspNetCore.Mvc;
using Mission04.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission04.controllers
{
    public class HomeController : Controller
    {
        //homepage
        public IActionResult Index()
        {
            return View();
        }

        //get method path
        [HttpGet]
        public IActionResult Calculator()
        {
            return View();
        }

        //post method path
        [HttpPost]
        public IActionResult Calculator(CalculatorModel cm)
        {
            return View();
        }
    }
}
