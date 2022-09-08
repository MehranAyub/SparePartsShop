using Core.Application.Orders.OrderDtos;
using Core.Data;
using Core.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Orders
{
    internal class OrderRepository : IOrderRepository
    {
        RepositoryContext _repositoryContext;
        public OrderRepository(RepositoryContext repositoryContext)
        {
            _repositoryContext = repositoryContext;
        }
        public IEnumerable<OrderListDto> GetAllOrders()
        {

            var orders = _repositoryContext.Orders.ToList();
            var customers = _repositoryContext.Customers.ToList();

            var records = (from o in orders
                           join c in customers
                           on o.CustomerId equals c.Id
                           select new OrderListDto
                           {
                               Id = o.Id,
                               Date = o.OrderDate.ToShortDateString(),
                               TotalBill = o.TotalBill,
                               Address = o.ShipAddress,
                               Status = o.Status,
                               Customer = c.FName + " " + c.LName

                           }).OrderBy(s => s.Date).ToList();
            return records;
        }

        public Order GetOrderById(int orderId)
        {
            var order = _repositoryContext.Orders.FirstOrDefault(s => s.Id == orderId);
            return order;
        }

        public Order GetOrderWithDetails(int Id)
        {
           
            // var  orders = _repositoryContext.Orders.Where(s => s.CustomerId == Id);
            //if(orders!=null)
            //Order query = null;
            //var studentEntity = _repositoryContext.Students.Where(student => student.Id.Equals(studentId)).FirstOrDefault();
            //if (studentEntity != null)
            //{
            //    var address = _repositoryContext.Addresses.Where(address => address.Id.Equals(studentEntity.AddressId)).FirstOrDefault();
            //    query = new Student
            //    {
            //        Id = studentEntity.Id,
            //        Address = address,
            //        RollId = studentEntity.RollId,
            //        Name = studentEntity.Name,
            //        Age = studentEntity.Age,
            //        Class = studentEntity.Class,
            //        AdmissionDate = studentEntity.AdmissionDate,
            //    };
            //}


            //return query;
            return null;
        }

        public void CreateOrder(OrderDto order)
        {
            var orders = new Order()
            {
                CustomerId = order.CustomerId,
                ShipAddress = order.Address,
                TotalBill = order.TotalBill,
                OrderDate = DateTime.Now,
                Details = order.OrderDetail.Select(n => new OrderDetail { ProductId = n.Id, Quantity = n.Quantity }).ToList(),
            };



            _repositoryContext.Orders.Add(orders);

        }


        public void OrderActions(OrderListDto action)
        {
            var order=_repositoryContext.Orders.FirstOrDefault(o=>o.Id==action.Id);
            order.Status=action.Status;
            _repositoryContext.Update(order);
            //var address = _repositoryContext.Addresses.FirstOrDefault(address => address.Id.Equals(student.AddressId));
            //_repositoryContext.Students.Remove(student);
            //_repositoryContext.Addresses.Remove(address);

        }
    }
}
