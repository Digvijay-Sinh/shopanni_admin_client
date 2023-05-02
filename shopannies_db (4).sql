-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 02, 2023 at 07:07 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

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
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `username`, `password`) VALUES
(1, 'admin@admin.com', 'admin123');

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `cart_item_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` varchar(191) DEFAULT NULL,
  `product_size_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `colour` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `name`, `description`) VALUES
(1, 'Formal Kurtis', 'Kurtis suitable for formal occasions'),
(15, 'New Category', '                        Category description'),
(16, '1', '2                        '),
(4, 'Designer Kurtis', 'Kurtis with unique and trendy designs'),
(5, 'Traditional Kurtis', 'Kurtis with traditional Indian designs and patterns');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `coupon_id` int(11) NOT NULL,
  `code` varchar(255) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `expiration_date` datetime DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`coupon_id`, `code`, `discount`, `expiration_date`) VALUES
(1, 'SAVE10', 15, '2023-06-30 00:00:00'),
(2, 'NEW30', 30, '2023-03-27 00:00:00'),
(3, 'SUMMER25', 25, '2023-09-30 00:00:00'),
(4, 'bye50', 50, '2023-03-30 00:00:00'),
(5, 'april50', 50, '2023-04-01 00:00:00'),
(6, 'april60', 60, '2023-04-01 00:00:00'),
(7, 'sweet16', 16, '2023-03-28 00:00:00'),
(8, 'sweet17', 17, '2023-04-01 00:00:00'),
(9, 'new60', 60, '2023-05-31 00:00:00'),
(10, 'demo1', 1, '2023-04-01 00:00:00'),
(11, 'demo2', 2, '2023-04-07 00:00:00'),
(12, 'demo3', 3, '2023-04-07 00:00:00'),
(13, 'demo5', 5, '2023-04-05 00:00:00'),
(14, 'demo6', 6, '2023-04-06 00:00:00'),
(15, 'demo10', 10, '2023-04-28 00:00:00'),
(16, 'old100', 100, '0000-00-00 00:00:00'),
(17, 'old100', 100, '2023-04-25 00:00:00'),
(18, 'mode50', 50, '2023-05-05 00:00:00'),
(21, 'demo123', 123, '2023-06-06 06:06:00'),
(22, 'demo45', 45, '2023-07-07 22:33:00'),
(24, '1updated again', 1, '2023-04-30 10:32:00');

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `image_id` int(11) NOT NULL,
  `product_id` varchar(255) NOT NULL,
  `image_url1` varchar(255) DEFAULT NULL,
  `image_url2` varchar(255) DEFAULT NULL,
  `image_url3` varchar(255) DEFAULT NULL,
  `image_url4` varchar(255) DEFAULT NULL,
  `image_url5` varchar(255) DEFAULT NULL,
  `image_url6` varchar(255) DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`image_id`, `product_id`, `image_url1`, `image_url2`, `image_url3`, `image_url4`, `image_url5`, `image_url6`, `updated_at`) VALUES
(9, '1682355009072', 'images_demo1.png', 'images_demo2.png', 'images_demo3.png', 'images_demo4.png', 'images_demo5.png', 'images_demo6.png', '2023-04-24 16:50:51'),
(13, '1682355055899', 'images_Screenshot_20221125_051933.png', 'images_Screenshot_20221125_052851.png', 'images_Screenshot_20221125_053036.png', 'images_Screenshot_20221125_053212.png', 'images_Screenshot_20221125_055442.png', 'images_Screenshot_20230204_110042.png', '2023-04-24 16:56:53'),
(14, '1682355686619', 'images_product-01.jpg', 'images_product-02.jpg', 'images_product-03.jpg', 'images_product-04.jpg', 'images_product-05.jpg', 'images_product-06.jpg', '2023-04-24 17:03:13'),
(15, '1682355798401', 'images_product-02.jpg', 'images_product-03.jpg', 'images_product-04.jpg', 'images_product-05.jpg', 'images_product-06.jpg', 'images_product-07.jpg', '2023-04-24 17:04:36'),
(16, '1682355878978', 'images_product-03.jpg', 'images_product-04.jpg', 'images_product-05.jpg', 'images_product-06.jpg', 'images_product-07.jpg', 'images_product-08.jpg', '2023-04-24 17:05:07');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `total_amount` decimal(10,2) DEFAULT NULL,
  `payment_status` varchar(255) DEFAULT NULL,
  `date_ordered` datetime DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `landmark` varchar(255) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `district` varchar(50) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `total_amount`, `payment_status`, `date_ordered`, `product_id`, `name`, `address`, `phone`, `email`, `landmark`, `state`, `district`) VALUES
(1, 1, '200.50', 'Paid', '2022-03-18 12:30:00', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(4, 1, '75.00', 'Paid', '2022-03-20 10:15:00', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(5, 4, '300.00', 'Pending', '2022-03-20 16:00:00', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orders2`
--

CREATE TABLE `orders2` (
  `orders_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `district` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `landmark` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders2`
--

INSERT INTO `orders2` (`orders_id`, `user_id`, `name`, `address`, `district`, `state`, `phone`, `email`, `total`, `created_at`, `updated_at`, `landmark`) VALUES
(1, 1, 'PANDATIRATH', 'KADIYANA', 'Ahmedabad', 'Gujarat', '9898989898', 'email@email.com', '234.00', '2023-04-30 13:02:54', '2023-04-30 13:02:54', 'ganpati mandir'),
(2, 1, '', '', '', '', '', '', '234.00', '2023-04-30 13:05:01', '2023-04-30 13:05:01', ''),
(3, 1, 'N', 'A', 'Ahmedabad', 'Gujarat', '9898989898', 'email@email.com', '234.00', '2023-04-30 13:07:08', '2023-04-30 13:07:08', 'landmark'),
(4, 1, 'DigvijaY', 'aDDRESS', 'Ahmedabad', 'Gujarat', '9494949494', 'dsc@dsc.com', '234.00', '2023-04-30 13:19:59', '2023-04-30 13:19:59', 'Temlpe'),
(5, 1, 'one', 'one', 'Ahmedabad', 'Gujarat', '090090909', 'd@d.com', '234.00', '2023-04-30 13:25:46', '2023-04-30 13:25:46', 'lake'),
(6, 1, 'D', 'A', 'Ahmedabad', 'Gujarat', '9898989898', 'email@emial.com', '234.00', '2023-04-30 13:49:43', '2023-04-30 13:49:43', 'lake');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

CREATE TABLE `order_items` (
  `order_item_id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `product_size_id` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `colour` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`order_item_id`, `order_id`, `product_id`, `product_size_id`, `quantity`, `colour`) VALUES
(1, 4, 2147483647, 1, 7, 'grey'),
(2, 6, 2147483647, 4, 29, 'blue'),
(3, 6, 2147483647, 4, 5, 'white');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` varchar(191) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `name`, `description`, `price`, `image_url`, `category_id`) VALUES
('1682355878978', '5', '5                        ', '5.00', '', 1),
('1682355798401', '4', '4                        ', '4.00', '', 2),
('1682355686619', '3', '3                        ', '3.00', '', 3),
('1682355055899', '2', '2                        ', '2.00', '', 3),
('1682355009072', '1', '1desc                        ', '1.00', '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `product_sizes`
--

CREATE TABLE `product_sizes` (
  `product_size_id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

CREATE TABLE `reviews` (
  `review_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `comment` text DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `sale_id` int(11) NOT NULL,
  `date_sold` date DEFAULT NULL,
  `total_sales` decimal(10,2) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`sale_id`, `date_sold`, `total_sales`) VALUES
(1, '2022-01-01', '1000.00'),
(2, '2022-02-01', '1500.50'),
(3, '2022-03-01', '800.00');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('9as_f_e5zOWrMu9buvsWTihHuDmoGHI8', 1682180382, '{\"cookie\":{\"originalMaxAge\":59999,\"expires\":\"2023-04-22T16:19:42.248Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"email\":\"sdc13103@gmail.com\"}'),
('9dhXk-WkI_vpv2UUaHjFmS6IhpCzJtEL', 1682180577, '{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2023-04-22T16:22:57.144Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"email\":\"sdc13103@gmail.com\"}'),
('CzGaAJrtE-Pa3eotl-BqEX5ZpbvZ9kZu', 1682180228, '{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2023-04-22T16:17:08.197Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"email\":\"sdc13103@gmail.com\"}'),
('OfDh3AuAN-CfC6yhOOcrrwIqtyEXUkCl', 1682181923, '{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2023-04-22T16:45:23.267Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"email\":\"sdc13103@gmail.com\"}'),
('WRPUTmfE81vQnbZuQ3ST58yvNYzJ-yZk', 1682180117, '{\"cookie\":{\"originalMaxAge\":59999,\"expires\":\"2023-04-22T16:15:16.900Z\",\"httpOnly\":true,\"path\":\"/\"},\"email\":\"sdc13103@gmail.com\",\"otp\":\"458998\",\"loggedIn\":true}'),
('X2DwSHCquulVq30L2DpcyILiAAHn_OZC', 1682181611, '{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2023-04-22T16:40:10.625Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"email\":\"sdc13103@gmail.com\"}'),
('_urwpe_ZPJF-6VlATtDgJlCpJVruywAv', 1682181950, '{\"cookie\":{\"originalMaxAge\":59998,\"expires\":\"2023-04-22T16:45:50.466Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"email\":\"sdc13103@gmail.com\"}'),
('axcgMYvmWT-VxDp28LAj90OnjRFHYCx6', 1682181244, '{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2023-04-22T16:34:03.893Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"email\":\"sdc13103@gmail.com\"}'),
('gjpCQ8LtDbJuuirzhfS6mbecJWcbiV0D', 1682684189, '{\"cookie\":{\"originalMaxAge\":59999,\"expires\":\"2023-04-28T12:16:29.101Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"email\":\"sdc13103@gmail.com\"}'),
('puleygGpSRFmP5jjRSJ3o8xb3klgoG6T', 1682497560, '{\"cookie\":{\"originalMaxAge\":60000,\"expires\":\"2023-04-26T08:25:59.834Z\",\"httpOnly\":true,\"path\":\"/\"},\"loggedIn\":true,\"email\":\"sdc13103@gmail.com\"}');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `postal_code` varchar(10) DEFAULT NULL,
  `contactno` varchar(10) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `email`, `password`, `first_name`, `last_name`, `address`, `city`, `state`, `country`, `postal_code`, `contactno`) VALUES
(3, 'dsc13103@gmail.com', 'password3', 'Rohit', 'Kumar', '789 Bazaar Road', 'Bengaluru', 'Karnataka', 'India', '560001', '1234567890'),
(4, 'priya@gmail.com', 'password4', 'Priya', 'Singh', '101 Gali No. 5', 'Jaipur', 'Rajasthan', 'India', '302001', '1234567890'),
(5, 'amit@gmail.com', 'password5', 'Amit', 'Sharma', '2222 Sector 16', 'Chandigarh', 'Chandigarh', 'India', '160015', '1234567890');

-- --------------------------------------------------------

--
-- Table structure for table `users2`
--

CREATE TABLE `users2` (
  `user_id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `number` varchar(15) NOT NULL,
  `address1` varchar(100) NOT NULL,
  `address2` varchar(100) NOT NULL,
  `state` varchar(50) NOT NULL,
  `district` varchar(50) NOT NULL,
  `pincode` char(6) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users2`
--

INSERT INTO `users2` (`user_id`, `name`, `email`, `number`, `address1`, `address2`, `state`, `district`, `pincode`, `password`) VALUES
(1, 'Digvijay', 'sdc13103@gmail.com', '9739892812', 'dvfefed', 'egvfev', 'state1', 'district1', '123456', 'password123'),
(2, 'Admins', 'work.digvijaysinh@gmail.com', '9558441004', 'aaaaa', 'dddddd', 'state1', 'district3', '363330', 'password123'),
(3, 'user2', 'work.digvijaysinh@gmail.com', '1234567891', 'wfew', 'wrfwr', 'state1', 'district2', '323432', 'errewfref'),
(4, 'Abc', 'abc@gmail.com', '1234567891', 'address 1', 'address 2', 'state2', 'district3', '333610', 'demo1'),
(5, 'Digvvijay', 'sdc13103@gmail.com', '8888888888', 'address 1', 'address 2', 'state1', 'district2', '363330', 'password123'),
(6, 'grefew', 'sdc13103@gmail.com', '1111111111', 'bfw', 'dfbe', 'state2', 'district3', '363330', 'password123'),
(7, 'name1', 'admin@admin.com', '9999999999', 'address1', 'address2', 'state1', 'district3', '222222', 'password123'),
(8, 'name1', 'admin@admin.com', '9999999999', 'address1', 'address2', 'state1', 'district3', '222222', 'password123'),
(9, 'name1', 'admin@admin.com', '9999999999', 'address1', 'address2', 'state1', 'district3', '222222', 'password123'),
(10, 'name', 'abc123@gmail.com', '9999999999', 'aa', 'bb', 'state2', 'district1', '363330', '12345678'),
(11, 'user2', '112@123.com', '1111111111', 'KADIYANA', 'add2', 'state1', 'district3', '363330', 'password123');

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `wishlist_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `wishlist`
--

INSERT INTO `wishlist` (`wishlist_id`, `user_id`, `product_id`) VALUES
(1, 1, 2),
(2, 2, 1),
(3, 3, 4),
(4, 4, 3),
(5, 5, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`cart_item_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `product_size_id` (`product_size_id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`coupon_id`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`image_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `orders2`
--
ALTER TABLE `orders2`
  ADD PRIMARY KEY (`orders_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`order_item_id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `product_id` (`product_id`),
  ADD KEY `product_size_id` (`product_size_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `product_sizes`
--
ALTER TABLE `product_sizes`
  ADD PRIMARY KEY (`product_size_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`sale_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email_idx` (`email`(191));

--
-- Indexes for table `users2`
--
ALTER TABLE `users2`
  ADD PRIMARY KEY (`user_id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`wishlist_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `cart_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `coupon_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `orders2`
--
ALTER TABLE `orders2`
  MODIFY `orders_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `order_item_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product_sizes`
--
ALTER TABLE `product_sizes`
  MODIFY `product_size_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `sale_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users2`
--
ALTER TABLE `users2`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `wishlist_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `orders2`
--
ALTER TABLE `orders2`
  ADD CONSTRAINT `orders2_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users2` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
