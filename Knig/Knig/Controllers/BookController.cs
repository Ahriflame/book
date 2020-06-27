using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LinqToDB;
using DataModels;
using knig.DataModel;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace helpfriend.Controllers
{
    [Route("Maain")]
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpGet("")]
        public IEnumerable<Book> Get()
        {
            using (var db = new knigozavrDB())
            {
                var users = db.GetTable<Book>();
                return Book.ToList();
            }
        }
    }
}
