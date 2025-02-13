// Initial 34 Pilates exercises
const initialExercises = [
    {
        id: 1,
        name: "The Hundred",
        description: "Lying on back, pump arms while holding legs in tabletop position",
        tags: ["abs", "core", "breathing"]
    },
    {
        id: 2,
        name: "Roll Up",
        description: "Slowly roll up and down, articulating through the spine",
        tags: ["abs", "spine", "flexibility"]
    },
    {
        id: 3,
        name: "Single Leg Circles",
        description: "Draw circles with one leg while maintaining pelvic stability",
        tags: ["hips", "core", "coordination"]
    },
    {
        id: 4,
        name: "Rolling Like a Ball",
        description: "Rock back and forth in a tight ball shape",
        tags: ["spine", "balance", "core"]
    },
    {
        id: 5,
        name: "Single Leg Stretch",
        description: "Alternating legs while maintaining core stability",
        tags: ["abs", "core", "coordination"]
    },
    {
        id: 6,
        name: "Double Leg Stretch",
        description: "Coordinated movement of arms and legs while maintaining core engagement",
        tags: ["abs", "core", "coordination"]
    },
    {
        id: 7,
        name: "Spine Stretch Forward",
        description: "Articulating forward spine stretch while seated",
        tags: ["spine", "flexibility", "breathing"]
    },
    {
        id: 8,
        name: "Open Leg Rocker",
        description: "Balance challenge with legs wide and spine curved",
        tags: ["balance", "core", "coordination"]
    },
    {
        id: 9,
        name: "Corkscrew",
        description: "Circular leg movement while maintaining stable pelvis",
        tags: ["abs", "core", "hips"]
    },
    {
        id: 10,
        name: "Saw",
        description: "Twisting spine stretch with opposing arm reaches",
        tags: ["spine", "flexibility", "rotation"]
    },
    {
        id: 11,
        name: "Swan Dive",
        description: "Back extension exercise with rocking motion",
        tags: ["back", "spine", "extension"]
    },
    {
        id: 12,
        name: "Single Leg Kicks",
        description: "Prone position leg kicks with upper body lifted",
        tags: ["back", "legs", "coordination"]
    },
    {
        id: 13,
        name: "Double Leg Kicks",
        description: "Prone position synchronized leg kicks",
        tags: ["back", "legs", "coordination"]
    },
    {
        id: 14,
        name: "Neck Pull",
        description: "Roll up variation with hands behind head",
        tags: ["neck", "spine", "core"]
    },
    {
        id: 15,
        name: "Scissors",
        description: "Alternating leg movements while maintaining core stability",
        tags: ["abs", "legs", "coordination"]
    },
    {
        id: 16,
        name: "Bicycle",
        description: "Circular leg movements in air",
        tags: ["abs", "legs", "coordination"]
    },
    {
        id: 17,
        name: "Shoulder Bridge",
        description: "Articulating spine into bridge position",
        tags: ["spine", "glutes", "hamstrings"]
    },
    {
        id: 18,
        name: "Spine Twist",
        description: "Seated rotation with arms extended",
        tags: ["spine", "rotation", "core"]
    },
    {
        id: 19,
        name: "Jack Knife",
        description: "Rolling back with legs extended to ceiling",
        tags: ["abs", "balance", "strength"]
    },
    {
        id: 20,
        name: "Side Kicks",
        description: "Leg series performed lying on side",
        tags: ["legs", "hips", "stability"]
    },
    {
        id: 21,
        name: "Teaser",
        description: "V-sit balance with roll down",
        tags: ["core", "balance", "strength"]
    },
    {
        id: 22,
        name: "Swimming",
        description: "Prone position alternating arm and leg lifts",
        tags: ["back", "coordination", "endurance"]
    },
    {
        id: 23,
        name: "Leg Pull Front",
        description: "Plank position with leg lifts",
        tags: ["core", "shoulders", "legs"]
    },
    {
        id: 24,
        name: "Leg Pull Back",
        description: "Reverse plank with leg lifts",
        tags: ["core", "shoulders", "back"]
    },
    {
        id: 25,
        name: "Side Bend",
        description: "Side plank with hip lift",
        tags: ["obliques", "shoulders", "balance"]
    },
    {
        id: 26,
        name: "Boomerang",
        description: "Complex movement combining roll up and twist",
        tags: ["advanced", "core", "coordination"]
    },
    {
        id: 27,
        name: "Seal",
        description: "Rolling like a ball variation with clapping feet",
        tags: ["spine", "balance", "coordination"]
    },
    {
        id: 28,
        name: "Crab",
        description: "Balance exercise with leg and arm coordination",
        tags: ["balance", "coordination", "strength"]
    },
    {
        id: 29,
        name: "Rocking",
        description: "Massage spine while balancing on crown of head",
        tags: ["spine", "neck", "massage"]
    },
    {
        id: 30,
        name: "Control Balance",
        description: "Advanced balance exercise on buttocks",
        tags: ["advanced", "balance", "core"]
    },
    {
        id: 31,
        name: "Push Ups",
        description: "Classical push ups with Pilates form",
        tags: ["arms", "chest", "core"]
    },
    {
        id: 32,
        name: "Hip Circles",
        description: "Circular hip movements while maintaining stability",
        tags: ["hips", "core", "mobility"]
    },
    {
        id: 33,
        name: "Roll Over",
        description: "Rolling over movement with control",
        tags: ["spine", "control", "flexibility"]
    },
    {
        id: 34,
        name: "Snake",
        description: "Advanced push up variation with twist",
        tags: ["advanced", "arms", "spine"]
    }
];

// Store exercises in localStorage or use initial set
localStorage.removeItem('exercises');  // Add this new line here
let exercises = JSON.parse(localStorage.getItem('exercises')) || initialExercises;
// Debug lines to see what's happening
console.log("Number of exercises:", exercises.length);
console.log("All exercises:", exercises);

// Modal functions
function showModal() {
    console.log("showModal called");
    document.getElementById('exerciseModal').classList.remove('hidden');
    document.getElementById('exerciseForm').reset(); // Clear the form
}

function closeModal() {
    console.log("closeModal called");
    document.getElementById('exerciseModal').classList.add('hidden');
}

function addNewExercise(event) {
    console.log("addNewExercise called");
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('exerciseName').value;
    const description = document.getElementById('exerciseDescription').value;
    const tags = document.getElementById('exerciseTags').value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length > 0);

    console.log("New exercise data:", { name, description, tags });

    const newExercise = {
        id: exercises.length + 1,
        name: name,
        description: description,
        tags: tags
    };

    exercises.push(newExercise);
    localStorage.setItem('exercises', JSON.stringify(exercises));
    
    closeModal(); // Make sure this is being called
    displayWorkoutExercises(); // Refresh the exercise list
}

// Function to filter exercises based on search term
function filterExercises(searchTerm, exerciseList, displayFunction) {
    console.log("Filtering exercises with term:", searchTerm);
    if (!searchTerm) {
        displayFunction(); // If search is empty, show all exercises
        return;
    }

    const filteredExercises = exercises.filter(exercise => {
        const searchLower = searchTerm.toLowerCase();
        return exercise.name.toLowerCase().includes(searchLower) ||
               exercise.description.toLowerCase().includes(searchLower) ||
               exercise.tags.some(tag => tag.toLowerCase().includes(searchLower));
    });

    console.log("Filtered exercises:", filteredExercises);
    displayFunction(filteredExercises); // Pass filtered results to display function
}

// Function to display exercises
function displayExercises(filteredExercises = null) {
    const exerciseList = document.getElementById('exerciseList');
    if (!exerciseList) return;

    const exercisesToDisplay = filteredExercises || exercises;
    
    exerciseList.innerHTML = exercisesToDisplay.map(exercise => `
        <div class="bg-white rounded-lg shadow p-3 mb-2">
            <div class="flex justify-between items-start">
                <div>
                    <h3 class="font-semibold">${exercise.name}</h3>
                    <p class="text-sm text-gray-600">${exercise.description}</p>
                    <div class="mt-1">
                        ${exercise.tags.map(tag => 
                            `<span class="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded mr-1 mb-1">${tag}</span>`
                        ).join('')}
                    </div>
                </div>
                <button onclick="deleteExercise(${exercise.id})" 
                        class="text-red-500 hover:text-red-700">×</button>
            </div>
        </div>
    `).join('');
}

// Function to show Add Exercise modal
function showAddExerciseModal() {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center';
    modal.id = 'addExerciseModal';
    
    modal.innerHTML = `
        <div class="bg-white p-6 rounded-lg w-11/12 max-w-md">
            <h2 class="text-xl font-bold mb-4">Add New Exercise</h2>
            <form id="addExerciseForm">
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Exercise Name</label>
                    <input type="text" id="exerciseName" required
                           class="w-full p-2 border rounded">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Description</label>
                    <textarea id="exerciseDescription" required
                            class="w-full p-2 border rounded"></textarea>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Tags (comma-separated)</label>
                    <input type="text" id="exerciseTags" 
                           placeholder="abs, core, breathing"
                           class="w-full p-2 border rounded">
                </div>
                <div class="flex justify-end gap-2">
                    <button type="button" onclick="closeModal()"
                            class="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                    <button type="submit"
                            class="px-4 py-2 bg-teal-600 text-white rounded">Add Exercise</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add form submit handler
    document.getElementById('addExerciseForm').addEventListener('submit', handleAddExercise);
}

// Function to close modal
function showModal() {
    console.log("showModal called");
    document.getElementById('exerciseModal').classList.remove('hidden');
    document.getElementById('exerciseForm').reset(); // Clear the form
}

// Function to handle adding new exercise
function handleAddExercise(event) {
    event.preventDefault();
    
    const name = document.getElementById('exerciseName').value;
    const description = document.getElementById('exerciseDescription').value;
    const tagsInput = document.getElementById('exerciseTags').value;
    const tags = tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag);

    const newExercise = {
        id: Date.now(),
        name,
        description,
        tags
    };

    exercises.push(newExercise);
    localStorage.setItem('exercises', JSON.stringify(exercises));
    
    closeModal();
    displayExercises();
}

// Function to edit exercise
function editExercise(id) {
    const exercise = exercises.find(ex => ex.id === id);
    if (!exercise) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center';
    modal.id = 'editExerciseModal';
    
    modal.innerHTML = `
        <div class="bg-white p-6 rounded-lg w-11/12 max-w-md">
            <h2 class="text-xl font-bold mb-4">Edit Exercise</h2>
            <form id="editExerciseForm">
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Exercise Name</label>
                    <input type="text" id="editExerciseName" required
                           value="${exercise.name}"
                           class="w-full p-2 border rounded">
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Description</label>
                    <textarea id="editExerciseDescription" required
                            class="w-full p-2 border rounded">${exercise.description}</textarea>
                </div>
                <div class="mb-4">
                    <label class="block text-gray-700 mb-2">Tags (comma-separated)</label>
                    <input type="text" id="editExerciseTags" 
                           value="${exercise.tags.join(', ')}"
                           class="w-full p-2 border rounded">
                </div>
                <div class="flex justify-end gap-2">
                    <button type="button" onclick="closeModal()"
                            class="px-4 py-2 bg-gray-200 rounded">Cancel</button>
                    <button type="submit"
                            class="px-4 py-2 bg-teal-600 text-white rounded">Save Changes</button>
                </div>
            </form>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // Add form submit handler
    document.getElementById('editExerciseForm').addEventListener('submit', (event) => {
        event.preventDefault();
        
        exercise.name = document.getElementById('editExerciseName').value;
        exercise.description = document.getElementById('editExerciseDescription').value;
        exercise.tags = document.getElementById('editExerciseTags').value
            .split(',')
            .map(tag => tag.trim())
            .filter(tag => tag);

        localStorage.setItem('exercises', JSON.stringify(exercises));
        closeModal();
        displayExercises();
    });
}

// Function to delete exercise
function deleteExercise(id) {
    if (confirm('Are you sure you want to delete this exercise?')) {
        exercises = exercises.filter(exercise => exercise.id !== id);
        localStorage.setItem('exercises', JSON.stringify(exercises));
        displayExercises();
    }
}

// Store current workout
let currentWorkout = [];

// Function to show Tab
function showTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Update active tab button
    document.querySelectorAll('nav button').forEach(button => {
        if (button.textContent.trim().toLowerCase() === tabName) {
            button.classList.add('text-teal-600');
        } else {
            button.classList.remove('text-teal-600');
        }
    });

    // Refresh displays when switching to workout tab
    if (tabName === 'workout') {
        displayWorkoutExercises();
    }
}

// Function to display exercises in workout tab
function displayWorkoutExercises(filteredExercises = null) {
    console.log("Displaying workout exercises");
    const exerciseList = document.getElementById('workoutExerciseList');
    console.log("Exercise list element:", exerciseList);

    if (!exerciseList) return;

    const exercisesToDisplay = filteredExercises || exercises;
    console.log("Number of exercises to display:", exercisesToDisplay.length);

    exerciseList.innerHTML = '';
    exercisesToDisplay.forEach(exercise => {
        const isInWorkout = currentWorkout.some(ex => ex.id === exercise.id);
        const exerciseHTML = `
            <div class="exercise-item bg-white rounded-lg shadow p-2 ${isInWorkout ? 'opacity-50' : ''}">
                <div class="flex justify-between items-start">
                    <h3 class="font-semibold">${exercise.name}</h3>
                    <div class="flex items-center gap-2">
                        ${isInWorkout ? '<span class="text-teal-500 text-sm">Added</span>' : ''}
                        <button onclick="addToWorkout(${exercise.id})" 
                                class="bg-teal-500 text-white px-2 py-1 rounded">
                            Add
                        </button>
                    </div>
                </div>
                <p class="text-sm text-gray-600">${exercise.description}</p>
                <div class="flex flex-wrap gap-1 mt-1">
                    ${exercise.tags.map(tag => `
                        <span class="tag">${tag}</span>
                    `).join('')}
                </div>
            </div>
        `;
        exerciseList.innerHTML += exerciseHTML;
    });
}

// Function to add exercise to workout
function addToWorkout(id) {
    const exercise = exercises.find(ex => ex.id === id);
    if (!exercise) return;

    currentWorkout.push({...exercise});
    displayWorkout();
    displayWorkoutExercises(); // Update the exercise list to show what's been added
}

// Function to remove exercise from workout
function removeFromWorkout(index) {
    currentWorkout.splice(index, 1); // Remove only the exercise at this specific index
    displayWorkout();
    displayWorkoutExercises();
}

// Function to display current workout
function displayWorkout() {
    const workoutList = document.getElementById('currentWorkoutList');
    workoutList.innerHTML = currentWorkout.map((exercise, index) => `
        <div class="exercise-item bg-white rounded-lg shadow p-2 mb-2" 
             draggable="true" 
             data-index="${index}">
            <div class="flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <div class="cursor-move text-gray-400 hover:text-gray-600" style="cursor: grab;">
                        ⋮⋮
                    </div>
                    <span class="font-semibold">${index + 1}. ${exercise.name}</span>
                </div>
                <button onclick="removeFromWorkout(${index})" 
                        class="text-red-500 hover:text-red-700">
                    ×
                </button>
            </div>
            <p class="text-sm text-gray-600 ml-6">${exercise.description}</p>
        </div>
    `).join('');

    // Add drag and drop event listeners
    const exercises = workoutList.querySelectorAll('.exercise-item');
    exercises.forEach(exercise => {
        exercise.addEventListener('dragstart', handleDragStart);
        exercise.addEventListener('dragover', handleDragOver);
        exercise.addEventListener('drop', handleDrop);
        exercise.addEventListener('dragenter', handleDragEnter);
        exercise.addEventListener('dragleave', handleDragLeave);
    });
}

// Drag and drop handlers
let draggedItem = null;

function handleDragStart(e) {
    draggedItem = this;
    this.style.opacity = '0.4';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', this.getAttribute('data-index'));
}

function handleDragOver(e) {
    e.preventDefault();
    return false;
}

function handleDragEnter(e) {
    this.classList.add('drag-over');
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    e.stopPropagation();
    e.preventDefault();

    if (draggedItem !== this) {
        const fromIndex = parseInt(draggedItem.getAttribute('data-index'));
        const toIndex = parseInt(this.getAttribute('data-index'));
        
        // Reorder the currentWorkout array
        const [movedItem] = currentWorkout.splice(fromIndex, 1);
        currentWorkout.splice(toIndex, 0, movedItem);
        
        displayWorkout();
    }

    return false;
}

// Function to save current workout
function saveWorkout() {
    if (currentWorkout.length === 0) {
        alert('Add some exercises to your workout before saving!');
        return;
    }

    const workoutName = prompt('Name your workout:');
    if (!workoutName) return;

    const workoutDescription = prompt('Add a description (optional):') || ''; // New line for description

    const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
    savedWorkouts.push({
        id: Date.now(),
        name: workoutName,
        description: workoutDescription, // Add description to saved workout
        exercises: currentWorkout
    });

    localStorage.setItem('savedWorkouts', JSON.stringify(savedWorkouts));
    currentWorkout = [];
    displayWorkout();
    alert('Workout saved!');
    displaySavedWorkouts();
}

// Function to clear current workout
function clearWorkout() {
    if (confirm('Are you sure you want to clear your workout?')) {
        currentWorkout = [];
        displayWorkout();
    }
}

// Function to display saved workouts
function displaySavedWorkouts() {
    const savedWorkoutsList = document.getElementById('savedWorkoutsList');
    const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
    
    if (savedWorkouts.length === 0) {
        savedWorkoutsList.innerHTML = `
            <div class="text-center text-gray-500 py-8">
                No saved workouts yet. Create a workout and save it to see it here!
            </div>
        `;
        return;
    }

    savedWorkoutsList.innerHTML = savedWorkouts.map(workout => `
        <div class="bg-white rounded-lg shadow p-4">
            <div class="flex justify-between items-center mb-2">
                <h3 class="text-lg font-semibold">${workout.name}</h3>
                <div class="space-x-2">
                    <button onclick="loadWorkout(${workout.id})" 
                            class="bg-teal-500 text-white px-3 py-1 rounded">
                        Load
                    </button>
                    <button onclick="deleteWorkout(${workout.id})" 
                            class="bg-red-500 text-white px-3 py-1 rounded">
                        Delete
                    </button>
                </div>
            </div>
            ${workout.description ? `
                <p class="text-gray-600 mb-2">${workout.description}</p>
            ` : ''}
            <p class="text-gray-600">${workout.exercises.length} exercises</p>
            <div class="mt-2 text-sm text-gray-500">
                ${workout.exercises.slice(0, 3).map(ex => ex.name).join(', ')}
                ${workout.exercises.length > 3 ? '...' : ''}
            </div>
        </div>
    `).join('');
}

// Function to load a saved workout
function loadWorkout(workoutId) {
    const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
    const workout = savedWorkouts.find(w => w.id === workoutId);
    
    if (workout) {
        currentWorkout = [...workout.exercises];
        displayWorkout();
        showTab('workout'); // Switch to workout tab
    }
}

// Function to delete a saved workout
function deleteWorkout(workoutId) {
    if (confirm('Are you sure you want to delete this workout?')) {
        const savedWorkouts = JSON.parse(localStorage.getItem('savedWorkouts')) || [];
        const updatedWorkouts = savedWorkouts.filter(w => w.id !== workoutId);
        localStorage.setItem('savedWorkouts', JSON.stringify(updatedWorkouts));
        displaySavedWorkouts();
    }
}

// Add event listeners when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log("Page loaded");
    displayExercises();
    displayWorkoutExercises();
    displayWorkout();
    displaySavedWorkouts();
    
    // Add exercise button
    const addButton = document.querySelector('.add-exercise-button');
    console.log("Add button:", addButton);
    if (addButton) {
        addButton.addEventListener('click', showModal);
    }

    // Search functionality for exercise library
    const exerciseSearchInput = document.getElementById('exerciseSearchInput');
    if (exerciseSearchInput) {
        console.log("Adding search listener to library tab");
        exerciseSearchInput.addEventListener('input', (e) => {
            filterExercises(e.target.value, document.getElementById('exerciseList'), displayExercises);
        });
    }

    // Workout search functionality
    const workoutSearchInput = document.getElementById('workoutSearchInput');
    console.log("Found workout search input:", workoutSearchInput);
    if (workoutSearchInput) {
        console.log("Adding workout search listener");
        workoutSearchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value;
            console.log("Workout search term:", searchTerm);
            console.log("Current number of exercises:", exercises.length);
            
            filterExercises(searchTerm, document.getElementById('workoutExerciseList'), displayWorkoutExercises);
        });
    } else {
        console.error("Could not find workout search input - check your HTML id");
    }

    // Add exercise form submission handler
    const exerciseForm = document.getElementById('exerciseForm');
    if (exerciseForm) {
        exerciseForm.addEventListener('submit', addNewExercise);
    }
});