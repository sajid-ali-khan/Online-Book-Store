**Online Book Store Requirements**

**1. Functional Requirements**

* **User Management:**
    * User registration and login
    * Profile management (update personal information, change password)
* **Book Catalog:**
    * Browse books by category or keyword
    * View book details (title, author, description, price, reviews)
    * Search for books
* **Shopping Cart:**
    * Add books to cart
    * Remove books from cart
    * Update quantities in cart
    * View cart total
* **Checkout:**
    * Shipping address and billing address
    * Payment options (credit card, PayPal, etc.)
    * Order confirmation and receipt
* **Order History:**
    * View past orders
    * Track order status
    * Reorder past purchases
* **Admin Panel:**
    * Manage book inventory (add, edit, delete)
    * Process orders
    * Handle customer inquiries
    * Generate sales reports

**2. Non-Functional Requirements**

* **Security:**
    * Secure password storage
    * Input validation to prevent SQL injection and XSS attacks
    * Session management
* **Performance:**
    * Efficient database queries
    * Optimized code
    * Fast page load times
* **Usability:**
    * Intuitive user interface
    * Clear navigation
    * Responsive design for different devices
* **Scalability:**
    * Ability to handle increasing user load
    * Scalable database design
* **Reliability:**
    * High availability
    * Error handling and logging
    * Regular backups

**3. Database Design**

* **Entities:**
    * User
    * Book
    * Order
    * OrderItem
* **Relationships:**
    * User can place many orders
    * Order can have many order items
    * Order item belongs to a book and an order

**4. Class Diagram**

![Online-Book-Store-Class-Diagram.png](../../Downloads/Online-Book-Store-Class-Diagram.png)

**5. Technical Specifications**

* **Front-end:** JSP
* **Back-end:** Servlet
* **Database:** PostgreSQL
* **Server:** Tomcat