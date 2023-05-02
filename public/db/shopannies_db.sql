-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Mar 19, 2023 at 02:59 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shopannies_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

DROP TABLE IF EXISTS `cart_items`;
CREATE TABLE IF NOT EXISTS `cart_items` (
  `cart_item_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `product_size_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`cart_item_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`),
  KEY `product_size_id` (`product_size_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`cart_item_id`, `user_id`, `product_id`, `product_size_id`, `quantity`) VALUES
(1, 1, 1, 1, 2),
(2, 1, 3, 2, 1),
(3, 2, 2, 3, 3),
(4, 3, 1, 2, 1),
(5, 2, 4, 1, 2);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `name`, `description`) VALUES
(1, 'Formal Kurtis', 'Kurtis suitable for formal occasions'),
(2, 'Party Wear Kurtis', 'Kurtis suitable for parties and special occasions'),
(3, 'Casual Kurtis', 'Kurtis suitable for daily wear and casual occasions'),
(4, 'Designer Kurtis', 'Kurtis with unique and trendy designs'),
(5, 'Traditional Kurtis', 'Kurtis with traditional Indian designs and patterns');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

DROP TABLE IF EXISTS `coupons`;
CREATE TABLE IF NOT EXISTS `coupons` (
  `coupon_id` int NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `discount` int DEFAULT NULL,
  `expiration_date` date DEFAULT NULL,
  PRIMARY KEY (`coupon_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`coupon_id`, `code`, `discount`, `expiration_date`) VALUES
(1, 'SAVE20', 20, '2023-06-30'),
(2, 'WELCOME10', 10, '2023-12-31'),
(3, 'SUMMER25', 25, '2023-09-30');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `order_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `date_ordered` datetime DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `total_amount`, `payment_status`, `date_ordered`) VALUES
(1, 1, '200.50', 'Paid', '2022-03-18 12:30:00'),
(2, 3, '100.00', 'Pending', '2022-03-19 09:45:00'),
(3, 2, '150.25', 'Paid', '2022-03-19 15:20:00'),
(4, 1, '75.00', 'Paid', '2022-03-20 10:15:00'),
(5, 4, '300.00', 'Pending', '2022-03-20 16:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
CREATE TABLE IF NOT EXISTS `order_items` (
  `order_item_id` int NOT NULL,
  `order_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `product_size_id` int DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  PRIMARY KEY (`order_item_id`),
  KEY `order_id` (`order_id`),
  KEY `product_id` (`product_id`),
  KEY `product_size_id` (`product_size_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`order_item_id`, `order_id`, `product_id`, `product_size_id`, `quantity`) VALUES
(1, 1, 1, 1, 2),
(2, 1, 2, 2, 1),
(3, 1, 3, 1, 1),
(4, 1, 4, 3, 3),
(5, 2, 2, 1, 1),
(6, 2, 3, 2, 2),
(7, 2, 4, 1, 1),
(8, 3, 1, 2, 3),
(9, 3, 3, 3, 1),
(10, 3, 5, 1, 2),
(11, 4, 2, 3, 1),
(12, 4, 4, 2, 2),
(13, 4, 6, 1, 1),
(14, 5, 1, 3, 1),
(15, 5, 2, 1, 2),
(16, 5, 5, 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `price` decimal(10,2) DEFAULT NULL,
  `img_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id` (`category_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `price`, `img_url`, `category_id`) VALUES
(1, 'Cotton Kurti', 'Comfortable cotton kurti with intricate embroidery', '999.00', 'https://example.com/images/cotton-kurti.jpg', 1),
(2, 'Silk Kurti', 'Elegant silk kurti with floral print', '1499.00', 'https://example.com/images/silk-kurti.jpg', 1),
(3, 'Chikankari Kurti', 'Handcrafted chikankari kurti with mirror work', '1999.00', 'https://example.com/images/chikankari-kurti.jpg', 1),
(4, 'Printed Kurti', 'Casual printed kurti with pockets', '799.00', 'https://example.com/images/printed-kurti.jpg', 1),
(5, 'Anarkali Kurti', 'Floor-length anarkali kurti with zari work', '2999.00', 'https://example.com/images/anarkali-kurti.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_sizes`
--

DROP TABLE IF EXISTS `product_sizes`;
CREATE TABLE IF NOT EXISTS `product_sizes` (
  `product_size_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`product_size_id`),
  KEY `product_id` (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `product_sizes`
--

INSERT INTO `product_sizes` (`product_size_id`, `product_id`, `size`) VALUES
(1, 1, 'S'),
(2, 1, 'M'),
(3, 1, 'L'),
(4, 1, 'XL'),
(5, 1, 'XXL'),
(6, 2, 'S'),
(7, 2, 'M'),
(8, 2, 'L'),
(9, 2, 'XL'),
(10, 2, 'XXL'),
(11, 3, 'S'),
(12, 3, 'M'),
(13, 3, 'L'),
(14, 3, 'XL'),
(15, 3, 'XXL'),
(16, 4, 'S'),
(17, 4, 'M'),
(18, 4, 'L'),
(19, 4, 'XL'),
(20, 4, 'XXL'),
(21, 5, 'S'),
(22, 5, 'M'),
(23, 5, 'L'),
(24, 5, 'XL'),
(25, 5, 'XXL');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
CREATE TABLE IF NOT EXISTS `reviews` (
  `review_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `rating` int DEFAULT NULL,
  `comment` text,
  PRIMARY KEY (`review_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `user_id`, `product_id`, `rating`, `comment`) VALUES
(1, 1, 1, 4, 'Great kurti, very comfortable and stylish'),
(2, 2, 3, 5, 'Absolutely loved the party wear kurti, got so many compliments'),
(3, 3, 2, 3, 'The formal kurti was good, but not great'),
(4, 4, 4, 4, 'The color and design of the kurti is amazing'),
(5, 5, 5, 2, 'Disappointed with the quality of the fabric, not worth the price');

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

DROP TABLE IF EXISTS `sales`;
CREATE TABLE IF NOT EXISTS `sales` (
  `sale_id` int NOT NULL AUTO_INCREMENT,
  `date_sold` date DEFAULT NULL,
  `total_sales` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`sale_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`sale_id`, `date_sold`, `total_sales`) VALUES
(1, '2022-01-01', '1000.00'),
(2, '2022-02-01', '1500.50'),
(3, '2022-03-01', '800.00');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `postal_code` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_idx` (`email`(191))
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `email`, `password`, `first_name`, `last_name`, `address`, `city`, `state`, `country`, `postal_code`) VALUES
(1, 'johndoe@gmail.com', 'password1', 'John', 'Doe', '123 Main Street', 'Mumbai', 'Maharashtra', 'India', '400001'),
(2, 'janedoe@gmail.com', 'password2', 'Jane', 'Doe', '456 Park Avenue', 'New Delhi', 'Delhi', 'India', '110001'),
(3, 'rohit@gmail.com', 'password3', 'Rohit', 'Kumar', '789 Bazaar Road', 'Bengaluru', 'Karnataka', 'India', '560001'),
(4, 'priya@gmail.com', 'password4', 'Priya', 'Singh', '101 Gali No. 5', 'Jaipur', 'Rajasthan', 'India', '302001'),
(5, 'amit@gmail.com', 'password5', 'Amit', 'Sharma', '2222 Sector 16', 'Chandigarh', 'Chandigarh', 'India', '160015');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
CREATE TABLE IF NOT EXISTS `wishlist` (
  `wishlist_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  PRIMARY KEY (`wishlist_id`),
  KEY `user_id` (`user_id`),
  KEY `product_id` (`product_id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`wishlist_id`, `user_id`, `product_id`) VALUES
(1, 1, 2),
(2, 2, 1),
(3, 3, 4),
(4, 4, 3),
(5, 5, 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
