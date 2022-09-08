﻿using Core.Data;
using Core.Data.Entities;
using Core.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Products
{
    internal class ProductRepository:IProductRepository
    {
        RepositoryContext _repositoryContext;
        public ProductRepository(RepositoryContext repositoryContext)
        {
            _repositoryContext = repositoryContext;
        }
        public IEnumerable<Product> GetAllProducts()
        {

            return _repositoryContext.Products.OrderBy(s => s.ProductName).ToList();
        }

        public Product GetProductById(int studentId)
        {
            var product = _repositoryContext.Products.FirstOrDefault(s => s.Id == studentId);
            return product;
        }

        public Product GetProductWithDetails(int productId)
        {
            //Product query = null;
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

        public void CreateProduct(Product product)
        {
            _repositoryContext.Products.Add(product);

        }

        public void UpdateProduct(Product student)
        {

            _repositoryContext.Products.Update(student);

        }

        public void DeleteProduct(Product student)
        {
            //var address = _repositoryContext.Addresses.FirstOrDefault(address => address.Id.Equals(student.AddressId));
            //_repositoryContext.Students.Remove(student);
            //_repositoryContext.Addresses.Remove(address);

        }
    }
}
