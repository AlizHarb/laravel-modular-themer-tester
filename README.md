# Laravel Modular & Themer Tester

This project serves as a test environment for verifying the functionality and integration of the following packages:

- [laravel-modular](https://github.com/AlizHarb/laravel-modular)
- [laravel-themer](https://github.com/AlizHarb/laravel-themer)

> [!NOTE]
> This project is originally based on the [Laravel Livewire Starter Kit](https://github.com/laravel/livewire-starter-kit).

## Overview

This application is built with Laravel and demonstrates the usage of modules and themes. It includes a refactored `Auth` module that encapsulates authentication logic, Fortify actions, and Livewire components.

## Local Setup

To set up the project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AlizHarb/laravel-modular-themer-tester.git
   cd laravel-modular-themer-tester
   ```

2. **Install dependencies:**
   ```bash
   composer install
   npm install
   ```

3. **Configure environment:**
   Copy the example environment file and configure your database settings:
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```
   
   Ensure you have a database set up and referenced in your `.env` file.

4. **Run migrations:**
   ```bash
   php artisan migrate
   ```
   
   *The modules also support migrations, ensuring a complete database setup.*

5. **Build frontend assets:**
   ```bash
   npm run build
   ```

6. **Serve the application:**
   ```bash
   php artisan serve
   ```

## Running Tests

To run the tests, specifically for the Auth module:

```bash
php artisan modular:test Auth
```
