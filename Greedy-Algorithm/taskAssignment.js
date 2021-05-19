// O(nlogn) Time | O(n) Space
// function taskAssignment(k, tasks) {
//     const sortedOrderIdx = [...new Array(tasks.length).keys()];

//     // get tasks-based sorted idx
// 	  sortedOrderIdx.sort((a, b) => { 
//       return tasks[a] - tasks[b]
//     });
	
//     const optimalAssignmentPairs = [];
//     let startIdx = 0;
//     let endIdx = sortedOrderIdx.length - 1;

//     while (startIdx < endIdx) {
//       const firstTaskIdx = sortedOrderIdx[startIdx];
//       const secondTaskIdx = sortedOrderIdx[endIdx];
//       optimalAssignmentPairs.push([firstTaskIdx, secondTaskIdx]);
//       startIdx += 1;
//       endIdx -= 1;
//     }

//     return optimalAssignmentPairs;
// }

// O(nlogn) Time | O(n) Space
function taskAssignment(k, tasks) {
	const pairedTasks = [];
	const sortedTasks = [...tasks].sort((a, b) => a - b);
  
	const tasksDurationToIndices = getTasksDurationToIndices(tasks);
	for (let idx = 0; idx < k; idx++) {
		const task1Duration = sortedTasks[idx];
		const task1DurationToIdx = tasksDurationToIndices[task1Duration].pop();
		
		const task2Idx = tasks.length - 1 - idx;
		const task2Duration = sortedTasks[task2Idx];
		const task2DurationToIdx = tasksDurationToIndices[task2Duration].pop();
		
		pairedTasks.push([task1DurationToIdx, task2DurationToIdx]);
	}
	
	return pairedTasks;
}

function getTasksDurationToIndices(tasks) {
	const tasksDurationToIndices = {};
	
	for (let idx = 0; idx < tasks.length; idx++) {
		if (tasks[idx] in tasksDurationToIndices) {
			tasksDurationToIndices[tasks[idx]].push(idx);
		} else {
			tasksDurationToIndices[tasks[idx]] = [idx];
		}
	}
	
	return tasksDurationToIndices;
}

console.log(taskAssignment(3, [1, 3, 5, 3, 1, 4]));

  