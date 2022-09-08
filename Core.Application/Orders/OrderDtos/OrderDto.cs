using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Orders.OrderDtos
{
    public class OrderDto
    {
        public int CustomerId { get; set; }
        public int TotalBill { get; set; }
        public string? Address { get; set; }
        public string? Email { get; set; }
        public string? Phone { get; set; }
        public ICollection<OrderDetails>? OrderDetail { get; set; }

    }
     
    public class OrderDetails
    {
        public int Id { get; set; }
        public int Quantity { get; set; }
    }

}
