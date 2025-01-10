import React from 'react';
import {
  Box,
  Container,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  Link,
  VStack,
  Image,
  Text,
  Flex,
  Icon,
} from '@chakra-ui/react';
import Marquee from 'react-fast-marquee';
import { FaChevronLeft, FaChevronRight, FaCalendarAlt, FaClock, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import G_logo from '../assets/google_logo.jpeg';
import Micro_logo from '../assets/microsoft_logo.jpeg';
import Meta_logo from '../assets/meta_logo.jpeg';
import Amazon_logo from '../assets/amazon_logo.jpeg';
import Netflix_logo from '../assets/netflix_logo.jpeg';
import flipkart_logo from '../assets/flipkart_logo.jpeg';
import walmart_logo from '../assets/walmart_logo.jpeg';
import uber_logo from '../assets/uber_logo.jpeg';
import Homeback1 from '../assets/home_back1.jpeg';
import Homeback2 from '../assets/home_back2.jpeg';
import Homeback3 from '../assets/home_back3.jpeg';
import Homeback4 from '../assets/home_back4.jpeg';

const popularCourses = [
  { title: 'Data Science', image: Homeback1, link: '/course/data-science', icon: '📊' },
  { title: 'Cybersecurity', image: Homeback2, link: '/course/cybersecurity', icon: '🔒' },
  { title: 'Mobile App Development', image: Homeback3, link: '/course/mobile-dev', icon: '📱' },
  { title: 'Cloud Computing', image: Homeback4, link: '/course/cloud-computing', icon: '☁️' },
  // Add more courses as needed
];

const companyLogos = [
  { name: 'TechCorp', logo: G_logo, link: 'https://techcorp.com' },
  { name: 'Innovate Inc.', logo: Micro_logo, link: 'https://innovateinc.com' },
  { name: 'FutureTech', logo: Meta_logo, link: 'https://futuretech.com' },
  { name: 'SoftSolutions', logo: Amazon_logo, link: 'https://softsolutions.com' },
  { name: 'CodeWorks', logo: Netflix_logo, link: 'https://codeworks.com' },
  { name: 'NextGen', logo: flipkart_logo, link: 'https://nextgen.com' },
  { name: 'DevMasters', logo: walmart_logo, link: 'https://devmasters.com' },
  { name: 'WebWizards', logo: uber_logo, link: 'https://webwizards.com' },
];

const upcomingContests = [
  { name: 'Summer Coding Fest', date: '2024-08-05', time: '16:00 UTC', registrationLink: '/register/summer-fest' },
  { name: 'AI Innovation Challenge', date: '2024-08-20', time: '11:00 UTC', registrationLink: '/register/ai-challenge' },
  { name: 'Full Stack Battle', date: '2024-09-10', time: '14:00 UTC', registrationLink: '/register/fullstack-battle' },
  // Add more upcoming contests
];

const pastContests = [
  { name: 'Spring Dev Challenge', date: '2024-06-01', time: '15:00 UTC', resultsLink: '/results/spring-dev' },
  { name: 'Data Science Derby', date: '2024-05-15', time: '12:00 UTC', resultsLink: '/results/data-science-derby' },
  { name: 'Algorithm Showdown', date: '2024-04-30', time: '13:00 UTC', resultsLink: '/results/algorithm-showdown' },
  // Add more past contests
];


const HomePage = () => {
  return (
    <Container maxW="container.xl" py={8}>
      <VStack spacing={12} align="stretch">
        <Box as={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            Popular Courses 📚
          </Heading>
          <Table variant="simple">
            <Tbody>
              {popularCourses.map((course, index) => (
                <Tr key={index}>
                  <Td>
                    <Text fontSize="2xl">{course.icon}</Text>
                  </Td>
                  <Td style={{ paddingLeft: '1000px' }}> {/* Adjust padding value as needed */}
                    <Link href={course.link} color="blue.500">
                      {course.title}
                    </Link>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

        </Box>

        {/* <Box as={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            Our Partners 🤝
          </Heading>
          <Marquee speed={50} gradient={false}>
            {companyLogos.map((company, index) => (
              <Link key={index} href={company.link} isExternal mx={4}>
                <Image src={company.logo} alt={company.name} h="50px" objectFit="contain" />
              </Link>
            ))}
          </Marquee>
        </Box> */}

        <Box as={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            Upcoming Contests 🏆
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Contest Name</Th>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Registration</Th>
              </Tr>
            </Thead>
            <Tbody>
              {upcomingContests.map((contest, index) => (
                <Tr key={index}>
                  <Td>
                    <Flex align="center">
                      <Icon as={FaTrophy} mr={2} color="yellow.500" />
                      {contest.name}
                    </Flex>
                  </Td>
                  <Td>
                    <Flex align="center">
                      <Icon as={FaCalendarAlt} mr={2} />
                      {contest.date}
                    </Flex>
                  </Td>
                  <Td>
                    <Flex align="center">
                      <Icon as={FaClock} mr={2} />
                      {contest.time}
                    </Flex>
                  </Td>
                  <Td>
                    <Button as={Link} href={contest.registrationLink} colorScheme="blue" size="sm">
                      Register
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>

        <Box as={motion.div} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          <Heading as="h2" size="xl" mb={6} textAlign="center">
            Past Contests 🏅
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Contest Name</Th>
                <Th>Date</Th>
                <Th>Time</Th>
                <Th>Results</Th>
              </Tr>
            </Thead>
            <Tbody>
              {pastContests.map((contest, index) => (
                <Tr key={index}>
                  <Td>
                    <Flex align="center">
                      <Icon as={FaTrophy} mr={2} color="gray.500" />
                      {contest.name}
                    </Flex>
                  </Td>
                  <Td>
                    <Flex align="center">
                      <Icon as={FaCalendarAlt} mr={2} />
                      {contest.date}
                    </Flex>
                  </Td>
                  <Td>
                    <Flex align="center">
                      <Icon as={FaClock} mr={2} />
                      {contest.time}
                    </Flex>
                  </Td>
                  <Td>
                    <Button as={Link} href={contest.resultsLink} colorScheme="green" size="sm">
                      View Results
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </VStack>
    </Container>
  );
};

export default HomePage;
