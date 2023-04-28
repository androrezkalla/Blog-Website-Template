import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Box, Button } from 'rebass';

const Header = () => {
  return (
    <Flex as="header" px={2} py={3} alignItems="center" className="header-container">
      <Box mx="auto">
        <Link to="/" className="header-link">
          <Button variant="outline" mr={2} className="header-button">
            Home
          </Button>
        </Link>
        <Link to="/create" className="header-link">
          <Button variant="outline" className="header-button">
            New Post
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
