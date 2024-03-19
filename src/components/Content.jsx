import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Content = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nisi
        nec ex ultricies laoreet. Nullam id lectus euismod, ultrices leo non,
        hendrerit arcu. Integer sed libero quis ligula eleifend fermentum. In
        vitae magna nec nisi feugiat dictum. Morbi in tempus est. Phasellus at
        urna tellus. In ac lacus id nisl placerat pharetra. Fusce eget
        convallis elit. Duis vitae turpis velit. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia Curae;
      </p>
      {!expanded && (
        <Button variant="primary" onClick={toggleExpand}>
          Read more
        </Button>
      )}
      {expanded && (
        <div>
          <p>
            Mauris eget tellus nec dolor interdum malesuada. Vestibulum eu
            sapien odio. Mauris suscipit ipsum sit amet dui vestibulum, sed
            ultricies lacus dignissim. Donec tincidunt lectus justo, vitae
            luctus quam commodo vel. Morbi eu leo sed urna posuere vehicula ac
            sit amet arcu. Curabitur nec ligula elit. Sed vitae nulla eget
            elit placerat condimentum vel eget justo. Nulla facilisi. Nullam
            molestie dictum est, sit amet pharetra velit posuere sed. Cras
            dictum venenatis arcu, sit amet facilisis metus tristique sed.
          </p>
          <Button variant="secondary" onClick={toggleExpand}>
            Read less
          </Button>
        </div>
      )}
    </div>
  );
};

export default Content;
