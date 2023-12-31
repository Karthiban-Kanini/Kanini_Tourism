﻿using System.ComponentModel.DataAnnotations;

namespace AccountAPI.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public string? Email { get; set; }
        public string? Role { get; set; }
        public byte[]? PasswordHash { get; set; }
        public byte[]? PasswordKey { get; set; }
    }
}
