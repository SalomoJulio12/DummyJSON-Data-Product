let data_products_tag = document.getElementById("data_products");

fetch("https://dummyjson.com/products")
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    data.products.forEach(product => {
      data_products_tag.innerHTML += `
        <tr class="border-b">
          <td class="py-4 px-6">
            <div class="flex items-center">
              <div class="w-16 h-16">
                <img src="${product.thumbnail}" class="rounded-lg object-cover w-full h-full" alt="${product.title}">
              </div>
              <div class="ml-4">
                <h3 class="text-lg font-semibold">${product.title}</h3>
                <p class="text-gray-500">
                  Price: $${product.price}
                  <br>
                  Category: ${product.category}
                </p>
              </div>
            </div>
          </td>
          <td class="py-4 px-6">
            <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Detail</button>
            <button class="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 ml-2">Edit</button>
            <button class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 ml-2">Delete</button>
          </td>
        </tr>`;
    });
  })
  .catch(error => console.error('Error fetching products:', error));
