const robotParts = [
  "Arduino Uno",
  "Breadboard",
  "Resistor 220Ω",
  "Resistor 10kΩ",
  "LED Light",
  "RGB LED",
  "Push Button",
  "Toggle Switch",
  "Potentiometer",
  "LDR Sensor",
  "Photoresistor",
  "Ultrasonic Sensor",
  "IR Sensor",
  "Temperature Sensor",
  "Humidity Sensor",
  "Soil Moisture Sensor",
  "PIR Sensor",
  "Flame Sensor",
  "Gas Sensor",
  "Sound Sensor",
  "Servo Motor",
  "DC Motor",
  "Stepper Motor",
  "Gear Motor",
  "Vibration Motor",
  "Buzzer",
  "Piezo Buzzer",
  "Speaker",
  "Micro Servo",
  "Solenoid",
  "Relay Module",
  "MOSFET",
  "Transistor NPN",
  "Transistor PNP",
  "Diode",
  "Capacitor 100nF",
  "Capacitor 10uF",
  "Inductor",
  "Jumper Wires",
  "Male-to-Male Wires",
  "Male-to-Female Wires",
  "Female-to-Female Wires",
  "Battery 9V",
  "Battery Holder",
  "18650 Cell",
  "Li-ion Battery",
  "LiPo Battery",
  "USB Cable",
  "Micro-USB Cable",
  "USB-C Cable",
  "Power Adapter",
  "Voltage Regulator",
  "Buck Converter",
  "Boost Converter",
  "ESP32 Module",
  "ESP8266 Module",
  "Raspberry Pi 4",
  "Raspberry Pi Zero",
  "NodeMCU",
  "HC-05 Bluetooth",
  "HC-06 Bluetooth",
  "WiFi Module",
  "Camera Module",
  "OLED Display",
  "LCD 16x2",
  "7-Segment Display",
  "Keypad 4x4",
  "Touch Sensor",
  "Joystick Module",
  "Accelerometer",
  "Gyroscope",
  "Compass Module",
  "MPU6050",
  "Motor Driver L293D",
  "Motor Driver TB6612FNG",
  "Motor Driver DRV8833",
  "H-Bridge",
  "Encoder",
  "Limit Switch",
  "Magnetic Switch",
  "Hall Sensor",
  "Laser Module",
  "IR LED",
  "Photodiode",
  "LED Strip",
  "Neopixel Strip",
  "Robot Chassis",
  "Caster Wheel",
  "Plastic Wheel",
  "Rubber Wheel",
  "Motor Bracket",
  "Screw Set",
  "Nut and Bolt Kit",
  "PVC Pipe",
  "Aluminum Frame",
  "3D Printed Part",
  "Plastic Gear",
  "Metal Gear",
  "Timing Belt",
  "Chain",
  "Pulley",
  "Shaft Coupler",
  "Bearings",
  "Linear Actuator",
  "Piston",
  "Gripper",
  "Arm Kit",
  "Robotic Arm Base",
  "Camera Mount",
  "USB Hub",
  "Breadboard Power Supply",
  "Proximity Sensor",
  "Laser Distance Sensor",
  "Color Sensor",
  "Tactile Sensor",
  "Current Sensor",
  "Voltage Sensor",
  "RFID Reader",
  "RFID Tag",
  "GPS Module",
  "GSM Module",
  "Bluetooth Module",
  "Webcam",
  "Rotary Encoder",
  "PCB Board",
  "Header Pins",
  "Perfboard",
  "Soldering Kit",
  "Heat Shrink Tube"
];

const partUses = {
  "Arduino Uno": "Brain of a prototype circuit and control system.",
  "Breadboard": "Build circuits without soldering.",
  "Resistor 220Ω": "Limits current in LEDs and protection circuits.",
  "LED Light": "Provides visual output and status indication.",
  "Servo Motor": "Rotates to a precise angle in robotic arms and mechanisms.",
  "DC Motor": "Converts electrical energy into rotational movement.",
  "Ultrasonic Sensor": "Measures distance using sound waves.",
  "IR Sensor": "Detects objects or lines in line-following robots.",
  "PIR Sensor": "Detects motion using infrared radiation.",
  "ESP32 Module": "Wireless control with Wi-Fi and Bluetooth support.",
  "Raspberry Pi 4": "Mini-computer for AI and complex automation tasks.",
  "Motor Driver L293D": "Controls motor direction and speed.",
  "Battery 9V": "Portable power source for basic projects.",
  "LCD 16x2": "Displays text and sensor readings.",
  "Buzzer": "Generates sound alerts and alarms.",
  "Robot Chassis": "Physical frame for placing motors and circuits.",
  "Camera Module": "Captures images or video for vision systems.",
  "GPS Module": "Tracks location in navigation projects.",
  "Relay Module": "Switches higher-voltage devices safely.",
  "Color Sensor": "Detects object color for sorting applications.",
  "RFID Reader": "Reads tags to identify objects or users.",
  "Laser Module": "Creates a beam for alignment or detection tasks."
};

const sectionData = [
  { section: "8A", members: 45, focus: "Basic Circuit Design" },
  { section: "8B", members: 45, focus: "Sensor Integration" },
  { section: "8C", members: 45, focus: "Robot Building" },
  { section: "8D", members: 45, focus: "Automation" },
  { section: "8E", members: 45, focus: "AI & Innovation" }
];

const dashboardStudents = [
  { name: "Aarav Iyer", section: "8A", tokens: 5200, projects: 4, quizzes: 15 },
  { name: "Meera Pillai", section: "8B", tokens: 6100, projects: 5, quizzes: 18 },
  { name: "Rohan Das", section: "8C", tokens: 4800, projects: 3, quizzes: 13 },
  { name: "Sana Kumar", section: "8D", tokens: 6900, projects: 6, quizzes: 21 },
  { name: "Karthik Rao", section: "8E", tokens: 7300, projects: 7, quizzes: 23 }
];

const roboticsFaqs = [
  { q: "What is a robot?", a: "A robot is a machine that can perform tasks automatically, often using sensors, motors, and a control system." },
  { q: "What is the use of a sensor?", a: "Sensors detect physical changes like distance, light, temperature, motion, and sound so the robot can react." },
  { q: "Why do we use resistors?", a: "Resistors limit current flow and protect components like LEDs and microcontrollers from damage." },
  { q: "What is the difference between Arduino and Raspberry Pi?", a: "Arduino is a microcontroller for controlling hardware; Raspberry Pi is a mini-computer for processing more advanced tasks." },
  { q: "What does a motor driver do?", a: "A motor driver helps control the speed and direction of motors using signals from a controller like Arduino." },
  { q: "How does a line-following robot work?", a: "It uses IR sensors to detect a black line on a lighter surface and adjust its movement to stay on track." },
  { q: "What is the purpose of a breadboard?", a: "A breadboard lets you build and test circuit connections without permanent soldering." },
  { q: "What is a circuit?", a: "A circuit is a closed loop that allows electric current to flow from a power source through components and back." }
];

const quizTemplates = [
  { question: "Which component is used to detect distance in a robot?", options: ["Buzzer", "Ultrasonic sensor", "Resistor", "Motor"], answer: "Ultrasonic sensor" },
  { question: "What is the main role of a microcontroller in robotics?", options: ["To store water", "To process sensor inputs and control outputs", "To generate light only", "To act as a wheel"], answer: "To process sensor inputs and control outputs" },
  { question: "Why is a resistor used with an LED?", options: ["To increase speed", "To protect the LED from excessive current", "To reduce battery size", "To make it wireless"], answer: "To protect the LED from excessive current" },
  { question: "Which device converts electrical signals into movement?", options: ["Motor", "Switch", "LED", "Battery"], answer: "Motor" },
  { question: "Which of these is a sensor?", options: ["Servo", "IR sensor", "Screw", "Wire"], answer: "IR sensor" },
  { question: "A line-following robot commonly uses which sensor?", options: ["IR sensor", "GPS module", "Humidity sensor", "Speaker"], answer: "IR sensor" },
  { question: "What does PWM help control?", options: ["Sound quality", "Motor speed", "Battery life", "Wheel size"], answer: "Motor speed" },
  { question: "Which component acts like a brain in many robot projects?", options: ["Arduino", "Ball bearing", "LED strip", "Nut"], answer: "Arduino" },
  { question: "Which part is often used for wireless communication?", options: ["Bluetooth module", "Piston", "Gear", "Fuse"], answer: "Bluetooth module" },
  { question: "What is the function of a relay?", options: ["Measure temperature", "Switch higher-power devices safely", "Store data", "Lift objects"], answer: "Switch higher-power devices safely" },
  { question: "Which is a common power source for robotics projects?", options: ["Microcontroller", "Battery", "Shaft", "Screw"], answer: "Battery" },
  { question: "What does an H-bridge do?", options: ["Controls motor direction and speed", "Stores electricity", "Shows display text", "Measures vibration"], answer: "Controls motor direction and speed" },
  { question: "Which sensor is used to detect motion?", options: ["PIR sensor", "Color sensor", "Potentiometer", "Encoder"], answer: "PIR sensor" },
  { question: "What is the primary use of a servo motor?", options: ["Precise angular movement", "Grinding grain", "Charging batteries", "Cooling circuits"], answer: "Precise angular movement" },
  { question: "Which component provides visual output?", options: ["Push button", "LED", "Gear", "Cable"], answer: "LED" },
  { question: "Why do robots use chassis?", options: ["To hold and support parts", "To connect to internet", "To store text", "To generate sound"], answer: "To hold and support parts" },
  { question: "Which of these is used for object detection using sound waves?", options: ["IR sensor", "Ultrasonic sensor", "Compass", "Vibration motor"], answer: "Ultrasonic sensor" },
  { question: "A buzzer is mainly used to create what?", options: ["Movement", "Sound alerts", "Strong magnets", "Heat"], answer: "Sound alerts" },
  { question: "What does a limit switch detect?", options: ["Temperature", "Movement limits", "Battery charge", "Color"], answer: "Movement limits" },
  { question: "Which kind of sensor can detect light intensity?", options: ["LDR", "DC motor", "Potentiometer", "Fan"], answer: "LDR" },
  { question: "What is a breadboard used for?", options: ["Data logging", "Temporary circuit assembly", "Motor handling", "Robot steering"], answer: "Temporary circuit assembly" },
  { question: "Which device is commonly used for display output in robotics?", options: ["LCD", "Wheel", "Shaft", "Relay"], answer: "LCD" },
  { question: "What is the purpose of a transistor in a circuit?", options: ["Switch or amplify current", "Measure distance", "Rotate body", "Store the battery"], answer: "Switch or amplify current" },
  { question: "Why is a battery holder useful?", options: ["To protect wires", "To hold cells securely", "To measure sound", "To rotate motors"], answer: "To hold cells securely" },
  { question: "Which part helps a robot sense pressure or touch?", options: ["Touch sensor", "Laser module", "Encoder", "Buzzer"], answer: "Touch sensor" },
  { question: "Which is used to measure rotational position?", options: ["Encoder", "Speaker", "Resistor", "Gear"], answer: "Encoder" },
  { question: "What does a camera module help a robot do?", options: ["See and recognize objects", "Lift heavy loads", "Store power", "Turn off alarms"], answer: "See and recognize objects" },
  { question: "Which sensor can detect colors?", options: ["Color sensor", "Magnetic switch", "Buzzer", "Capacitor"], answer: "Color sensor" },
  { question: "Which device helps control motor direction?", options: ["H-bridge", "LED strip", "Potentiometer", "Switch"], answer: "H-bridge" },
  { question: "What is the purpose of a voltage regulator?", options: ["Increase speed", "Provide stable voltage", "Generate sound", "Move wheels"], answer: "Provide stable voltage" },
  { question: "Why should circuits be tested carefully?", options: ["To avoid short circuits and damage", "To increase noise", "To make the robot heavy", "To store energy"], answer: "To avoid short circuits and damage" },
  { question: "Which of these is an output device?", options: ["Sensor", "Motor", "Switch", "Wire"], answer: "Motor" },
  { question: "What is the purpose of a gripper in a robot?", options: ["To hold and manipulate objects", "To create light", "To connect to Wi-Fi", "To measure pressure"], answer: "To hold and manipulate objects" },
  { question: "Which sensor helps with obstacle avoidance?", options: ["Ultrasonic sensor", "Laser module", "Capacitor", "Speaker"], answer: "Ultrasonic sensor" },
  { question: "What does an ESP32 support?", options: ["Wi-Fi and Bluetooth", "Only wheels", "Only motors", "Only sound"], answer: "Wi-Fi and Bluetooth" },
  { question: "Why is a robot chassis important?", options: ["It supports the mechanical structure", "It provides sound", "It powers the sensors", "It acts as a battery"], answer: "It supports the mechanical structure" },
  { question: "Which component stores electrical charge temporarily?", options: ["Capacitor", "Motor", "Gyroscope", "Switch"], answer: "Capacitor" },
  { question: "What is the main job of a sensor in a robot?", options: ["To detect environment changes", "To make the robot bigger", "To add weight", "To stop current"], answer: "To detect environment changes" },
  { question: "Which part helps convert mechanical rotation into a digital reading?", options: ["Encoder", "Resistor", "Breadboard", "Servo"], answer: "Encoder" },
  { question: "What does a GPS module do?", options: ["Measures distance", "Provides location data", "Creates movement", "Acts as a switch"], answer: "Provides location data" }
];

const generatedProjects = Array.from({ length: 125 }, (_, index) => {
  const prefixList = ["Smart", "Autonomous", "AI", "Solar", "Gesture", "Remote", "Eco", "Wireless", "Sensor", "Drone", "Robotic", "Portable", "Mini", "Vision", "IoT"];
  const nounList = ["Plant Monitor", "Vacuum Bot", "Arm", "Car", "Door Lock", "Traffic Signal", "Watering System", "Sorting Machine", "Crane", "Pet Feeder", "Lawn Mower", "Fan Controller", "Drone", "Toy Rover", "Security Guard", "Shopping Cart", "Waste Sorter", "Robot Arm", "Garage Door", "Home Assistant", "Smart Lamp", "Delivery Bot", "Line Follower", "Mini Robot", "Agriculture Bot", "Parking Sensor", "Speed Detector", "Pest Trap", "Surveillance Bot", "Fitness Tracker", "Music Bot"];
  const title = `${prefixList[index % prefixList.length]} ${nounList[index % nounList.length]} ${index + 1}`;
  const use = ["Home automation", "School innovation", "Industrial prototype", "Agriculture support", "Safety monitoring", "Automation test bed"][index % 6];
  const functionText = ["Detects inputs, processes logic, and triggers movement or alerts.", "Saves labor by performing repeated tasks.", "Collects sensor data and automates actions.", "Improves safe operation with feedback control.", "Makes daily tasks easier using robotics and embedded systems.", "Explains the concept of automation in a small-scale project."][index % 6];
  const requiredParts = [
    "Arduino Uno, ultrasonic sensor, servo motor, battery pack, wheels",
    "Raspberry Pi, camera module, motor driver, chassis, sensors",
    "ESP32, buzzer, relay, power supply, LEDs",
    "LDR sensor, soil sensor, microcontroller, pump, wire set",
    "IR sensors, motors, joystick, battery, switches",
    "Ultrasonic module, servo, breadboard, chassis, display"
  ][index % 6];
  const buildSteps = `1. Assemble the frame and mount the sensors. 2. Connect the controller and power module. 3. Program logic for detection and response. 4. Test movement and safety conditions. 5. Fine-tune performance and document results.`;
  const cost = `${(350 + (index % 12) * 120).toFixed(0)} INR`;
  return { title, use, functionText, requiredParts, buildSteps, cost };
});

const generatedQuizBank = Array.from({ length: 37 }, (_, index) => ({
  id: index + 1,
  question: quizTemplates[index % quizTemplates.length].question,
  options: quizTemplates[index % quizTemplates.length].options,
  answer: quizTemplates[index % quizTemplates.length].answer
}));

function generatePartCard(partName) {
  const description = partUses[partName] || "Used in robotics systems for control, sensing, movement, and communication.";
  return {
    name: partName,
    category: partName.includes("Motor") ? "Movement" : partName.includes("Sensor") ? "Sensing" : partName.includes("Battery") || partName.includes("Module") ? "Power & Connectivity" : "Control & Components",
    use: description,
    function: description,
    image: buildPartImage(partName)
  };
}

const partCatalog = robotParts.map(generatePartCard);

function buildPartImage(label) {
  const safeLabel = encodeURIComponent(label.slice(0, 16));
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="360" height="220" viewBox="0 0 360 220">
      <rect width="360" height="220" fill="#0d1b2a"/>
      <circle cx="110" cy="110" r="54" fill="#38bdf8" opacity="0.85"/>
      <rect x="175" y="58" width="110" height="94" rx="12" fill="#f8fafc" opacity="0.9"/>
      <text x="180" y="112" fill="#0f172a" font-size="20" font-family="Arial" text-anchor="middle">${safeLabel}</text>
      <path d="M50 170 L310 170" stroke="#7dd3fc" stroke-width="6" stroke-linecap="round"/>
    </svg>
  `;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const faqList = roboticsFaqs;
const quizBank = generatedQuizBank;
const projectIdeas = generatedProjects;
