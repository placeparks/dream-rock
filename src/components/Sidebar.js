import React, { useState } from 'react';
import { Box, Radio, RadioGroup, Stack, Progress, VStack, Heading } from "@chakra-ui/react";

const steps = ['Step 1', 'Step 2', 'Step 3'];

function Sidebar() {
  const [value, setValue] = useState("1");
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  }

  return (
    <Box display="flex">
      <Box width="20%" borderRight="1px" borderColor="gray.200" p={4}>
        <VStack align="start" spacing={4}>
          {steps.map((stepName, index) => (
            <Box key={index}>
              <Heading size="sm">{stepName}</Heading>
              <Progress
                height="2px"
                width="100px"
                value={(step > index ? 100 : (step === index ? Number(value) * 33.33 : 0))}
                orientation="horizontal"
              />
            </Box>
          ))}
        </VStack>
      </Box>
      <Box width="80%" p={4}>
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="column">
            <Radio value="1">Option 1</Radio>
            <Radio value="2">Option 2</Radio>
            <Radio value="3">Option 3</Radio>
          </Stack>
        </RadioGroup>
        <button onClick={nextStep}>Next</button>
      </Box>
    </Box>
  );
}

export default Sidebar;
