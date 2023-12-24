import { Button, Container, Input, Stack } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import DatePicker, { CalendarContainer } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export const SearchBar = () => {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [formattedAPIDate, setFormattedAPIDate] = useState('2022-01-01');
    const [roverName, setRoverName] = useState('Curiosity');

    const API_KEY = 'D5XmTzyRFPHDzKv3yBRMWwwtfYd7Ui986j8vC2KM';
    //sample request to NASA API 
    //https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?earth_date=2022-01-01&api_key=D5XmTzyRFPHDzKv3yBRMWwwtfYd7Ui986j8vC2KM

    const FIRST_PART_ROOT_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/`;
    const MIDDLE_PART = `/photos?earth_date=`;
    const SECOND_PART_ROOT_URL = `&api_key=${API_KEY}`;

    //fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/photos?earth_date=2022-01-01&api_key=D5XmTzyRFPHDzKv3yBRMWwwtfYd7Ui986j8vC2KM')
    const FULL_URL = `${FIRST_PART_ROOT_URL}${roverName}${MIDDLE_PART}${formattedAPIDate}${SECOND_PART_ROOT_URL}`;

    // useEffect(() => {
    //     fetch(FULL_URL)
    //         .then(res => res.json())
    //         .then(data => console.log('here is the data', data))
    //         .catch(error => console.error('ERROR', error));
    // }, []);

    const getAPIData = () => {
        let newcoolDate = startDate.toLocaleDateString("fr-CA");
        console.log('formatted DATE', newcoolDate);
        setFormattedAPIDate(newcoolDate);
        
        fetch(FULL_URL)
            .then(res => res.json())
            .then(data => console.log('here is the data', data))
            .catch(error => console.error('ERROR', error));
    }

    // useEffect(() => {
    //     console.log('dropdown value',roverName )
    //     console.log('date change', startDate);
    // }, [roverName,startDate]);

    const onFormSubmit = (e: any) => {
        e.preventDefault();
        console.log('on form submit')
        getAPIData();

    }

    return (
        <>
            <form onSubmit={onFormSubmit}>
                <Container size="xs">
                    <CalendarContainer>
                        <DatePicker
                            showIcon
                            dateFormat="yyyy-MM-dd"
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}

                        />
                    </CalendarContainer>
                    <Input.Wrapper description="Select Rover" mt="xl">
                        <Input
                            component="select"
                            rightSection={<IconChevronDown size={14} stroke={1.5} />}
                            pointer
                            value={roverName}
                            onChange={(e) => setRoverName(e.target.value)}
                        >
                            <option value="Curiosity">Curiosity</option>
                            <option value="Perseverance">Perseverance</option>
                        </Input>
                        <Button variant="filled" mt="md" type='submit' >
                            Submit
                        </Button>
                    </Input.Wrapper>
                </Container>
            </form>


        </>

    );
}