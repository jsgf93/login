using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace default_app.Models
{
    public class User
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public bool Flag { get; set; }

        public User(string username, string password, bool flag = false)
        {
            this.Username = username;
            this.Password = password;
        }
    }
}