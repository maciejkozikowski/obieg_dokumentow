using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MySql.Data.MySqlClient;

namespace WebApplication2.Controllers
{
    //https://www.youtube.com/watch?v=TcovfE8IsHs poradnik

    public class User
    {
        public string id { get; set; }
        public string email { get; set; }
        public string password { get; set; }
        public string imie { get; set; }
        public string nazwisko { get; set; }
        public string role { get; set; }
        public string error { get; set; }

        public User(string id, string email, string password, string imie, string nazwisko, string role, string error)
        {
            this.id = id;
            this.email = email;
            this.password = password;
            this.imie = imie;
            this.nazwisko = nazwisko;
            this.role = role;
            this.error = error;
        }
    }

    public class UsersController : ApiController
    {
        // GET api/users
        public IEnumerable<User> Get()
        {
            MySqlConnection conn = WebApiConfig.conn();
            MySqlCommand query = conn.CreateCommand();
            query.CommandText = "SELECT * FROM user";
            var results = new List<User>();
            try
            {
                conn.Open();
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                //throw;
                //return "failure: " + ex;
                results.Add(new User(null, null, null, null, null, null, ex.ToString()));
            }

            MySqlDataReader fetch_query = query.ExecuteReader();
            while (fetch_query.Read())
            {
                //return fetch_query["email"].ToString();
                results.Add(new User(fetch_query["id"].ToString(), 
                    fetch_query["email"].ToString(), 
                    fetch_query["password"].ToString(),
                    fetch_query["imie"].ToString(),
                    fetch_query["nazwisko"].ToString(),
                    fetch_query["role"].ToString(),
                    null));
            }

            //return "doneee!";
            return results;
        }

        // GET api/users/5
        public List<User> Get(int id)
        {
            MySqlConnection conn = WebApiConfig.conn();
            MySqlCommand query = conn.CreateCommand();
            query.CommandText = "SELECT * FROM user WHERE id = @id";
            query.Parameters.AddWithValue("@id", id);
            var results = new List<User>();
            try
            {
                conn.Open();
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                //throw;
                //return "failure: " + ex;
                results.Add(new User(null, null, null, null, null, null, ex.ToString()));
            }

            MySqlDataReader fetch_query = query.ExecuteReader();
            while (fetch_query.Read())
            {
                //return fetch_query["email"].ToString();
                results.Add(new User(fetch_query["id"].ToString(),
                    fetch_query["email"].ToString(),
                    fetch_query["password"].ToString(),
                    fetch_query["imie"].ToString(),
                    fetch_query["nazwisko"].ToString(),
                    fetch_query["role"].ToString(),
                    null));
            }

            //return "doneee!";
            return results;
        }

        // POST api/users
        public void Post([FromBody]dynamic value)
        {
            MySqlConnection conn = WebApiConfig.conn();
            MySqlCommand query = conn.CreateCommand();
            query.CommandText = "INSERT INTO user (email, password, role) VALUES (@email, @password, @role)";
            query.Parameters.AddWithValue("@email", value.email);
            query.Parameters.AddWithValue("@password", value.password);
            query.Parameters.AddWithValue("@role", value.role);
            //var results = new List<User>();
            try
            {
                conn.Open();
            }
            catch (MySql.Data.MySqlClient.MySqlException ex)
            {
                throw;
            }

            MySqlDataReader fetch_query = query.ExecuteReader();
            fetch_query.Read();
        }

        // PUT api/users/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/users/5
        public void Delete(int id)
        {
        }
    }
}
