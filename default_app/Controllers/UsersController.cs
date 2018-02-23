using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using default_app.Models;

namespace default_app.Controllers
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        public User testUser = new User("test", "test");

        [HttpPost]
        public User Authenticate(string username, string password)
        {
            testUser.Flag = username.Equals(testUser.Username) && password.Equals(testUser.Password) ? true : false ;
            return testUser;
        }
    }
}