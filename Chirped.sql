
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    department VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    manager_id INT,
    start_date DATE NOT NULL,
    address_id INT,
    created_at DATETIME NOT NULL,
    updated_at DATETIME DEFAULT NULL,
    FOREIGN KEY (manager_id) REFERENCES users(user_id),
    FOREIGN KEY (address_id) REFERENCES addresses(address_id)
);

CREATE TABLE user_profiles (
    user_id INT PRIMARY KEY,
    display_name VARCHAR(255),
    password VARCHAR(255),
    bio TEXT,
    profile_pic_url VARCHAR(255),
    created_at DATETIME NOT NULL,
    updated_at DATETIME DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

CREATE TABLE follows (
    follow_id INT AUTO_INCREMENT PRIMARY KEY,
    follower_id INT NOT NULL,
    following_id INT NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (follower_id) REFERENCES users(user_id),
    FOREIGN KEY (following_id) REFERENCES users(user_id)
);

CREATE TABLE tweets (
    tweet_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    updated_at DATETIME DEFAULT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE tweet_images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    tweet_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (tweet_id) REFERENCES tweets(tweet_id)
);

CREATE TABLE comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    tweet_id INT NOT NULL,
    user_id INT NOT NULL,
    parent_comment_id INT DEFAULT NULL,
    content TEXT NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (tweet_id) REFERENCES tweets(tweet_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (parent_comment_id) REFERENCES comments(comment_id)
);

CREATE TABLE comment_images (
    image_id INT AUTO_INCREMENT PRIMARY KEY,
    comment_id INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    FOREIGN KEY (comment_id) REFERENCES comments(comment_id)
);


CREATE TABLE addresses (
    address_id INT AUTO_INCREMENT PRIMARY KEY,
    street_address VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255) NOT NULL,
    country VARCHAR(255) NOT NULL,
    postal_code VARCHAR(10) NOT NULL,
    office_floor VARCHAR(10),
    office_room_number VARCHAR(10),
    office_area_description TEXT,
    created_at DATETIME NOT NULL,
    updated_at DATETIME DEFAULT NULL
);



/* --------create index to improve search--------- */
CREATE INDEX idx_username ON users (username);
CREATE INDEX idx_department ON users (department);
CREATE INDEX idx_title ON users (title);
CREATE INDEX idx_address_id ON users (address_id);
CREATE INDEX idx_department_title ON users (department, title);


CREATE INDEX idx_user_id ON tweets (user_id);
CREATE INDEX idx_created_at ON tweets (created_at DESC);
CREATE INDEX idx_updated_at ON tweets (updated_at DESC);


CREATE INDEX idx_follower_id ON follows (follower_id);
CREATE INDEX idx_following_id ON follows (following_id);


CREATE INDEX idx_tweet_id_on_comments ON comments (tweet_id);






/* ------other table may consider be created------- */

CREATE TABLE likes (
    like_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    content_id INT NOT NULL,
    content_type ENUM('tweet', 'comment') NOT NULL,
    created_at DATETIME NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    INDEX idx_content (content_id, content_type)
);




