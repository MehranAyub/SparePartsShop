using Core.Application;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net.Http.Headers;

namespace TheShopWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Product : ControllerBase
    {
        private  readonly IRepositoryWrapper _repository;

        public Product(IRepositoryWrapper repositoryWrapper)
        {
            _repository = repositoryWrapper;

        }
        [HttpGet]
        public IActionResult GetAllProducts()
        {
            try
            {
                var products = _repository.Product.GetAllProducts();

                return Ok(products);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error" + ex);
            }
        }

        [HttpGet("{id}", Name = "ProductById")]
        public IActionResult GetProductById(int id)
        {
            try
            {
                var product = _repository.Product.GetProductById(id);
                if (product == null)
                {
                    return NotFound();
                }
                else
                {
                    return Ok(product);
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error " + ex);
            }
        }

        [HttpPost]
        public IActionResult CreateProduct()
        {




            var fileName = "";
                    // 1. get the file form the request
                    var postedFile = Request.Form.Files[0];
                    // 2. set the file uploaded folder
                    var uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "Assets");
                    // 3. check for the file length, if it is more than 0 the save it
                    if (postedFile.Length > 0)
                    {
                        // 3a. read the file name of the received file
                         fileName = ContentDispositionHeaderValue.Parse(postedFile.ContentDisposition).FileName.Trim('"');
                // 3b. save the file on Path
                var finalPath = Path.Combine(uploadFolder, fileName);
                        using (var fileStream = new FileStream(finalPath, FileMode.Create))
                        {
                            postedFile.CopyTo(fileStream);
                        }
                       
                    }

               var product = JsonConvert.DeserializeObject<Core.Data.Entities.Product>(Request.Form["form"])?? new Core.Data.Entities.Product();
            product.Image = fileName;
            
            _repository.Product.CreateProduct(product);
            _repository.Save();


            return Ok(product);
            
           
        }
        //public IActionResult UploadFile()
        //{
        //    try
        //    {
        //        // 1. get the file form the request
        //        var postedFile = Request.Form.Files[0];
        //        // 2. set the file uploaded folder
        //        var uploadFolder = Path.Combine(Directory.GetCurrentDirectory(), "Assets");
        //        // 3. check for the file length, if it is more than 0 the save it
        //        if (postedFile.Length > 0)
        //        {
        //            // 3a. read the file name of the received file
        //            var fileName = ContentDispositionHeaderValue.Parse(postedFile.ContentDisposition).FileName.Trim('"');
        //            // 3b. save the file on Path
        //            var finalPath = Path.Combine(uploadFolder, fileName);
        //            using (var fileStream = new FileStream(finalPath, FileMode.Create))
        //            {
        //                postedFile.CopyTo(fileStream);
        //            }
        //            return Ok(finalPath);
        //        }
        //        else
        //        {
        //            return BadRequest("The File is not received.");
        //        }


        //    }
        //    catch (Exception ex)
        //    {
        //        return StatusCode(500, $"Some Error Occcured while uploading File {ex.Message}");
        //    }
        //}

        [HttpPut]
        public IActionResult UpdateProduct([FromBody] Core.Data.Entities.Product product)
        {
            try
            {
                if (product == null)
                {
                    return BadRequest("product object is null");
                }

                if (!ModelState.IsValid)
                {
                    return BadRequest("Invalid model object");
                }



                _repository.Product.UpdateProduct(product);
                _repository.Save();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error " + ex);
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteProduct(int id)
        {
            try
            {
                var product = _repository.Product.GetProductById(id);

                if (product == null)
                {
                    return NotFound();
                }

                _repository.Product.DeleteProduct(product);
                _repository.Save();

                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Internal server error " + ex);
            }
        }
    }
}
