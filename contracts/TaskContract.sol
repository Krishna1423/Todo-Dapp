// SPDX-License-Identifier: MIT
 
pragma solidity ^0.8.4;
 
contract TaskContract {

    enum Importance {LOW, MEDIUM, HIGH}

    struct Task {
        uint256 id;
        address username;
        string taskText;
        Importance imp;
        bool isDeleted;
    }
 
    Task[] private tasks;
 
    // Mapping of Task id to the wallet address of the user
    mapping(uint256 => address) taskToOwner;
 
    event AddTask(address recipient, uint256 taskId, Importance imp);
    event DeleteTask(uint256 taskId, bool isDeleted);
 
    function addTask(string memory taskText, Importance imp, bool isDeleted) external {
        uint256 taskId = tasks.length;
        tasks.push(Task(taskId, msg.sender, taskText, imp, isDeleted));
        taskToOwner[taskId] = msg.sender;
        emit AddTask(msg.sender, taskId, imp);
    }
 
    function getMyTasks() external view returns (Task[] memory) {
        Task[] memory temporary = new Task[](tasks.length);
        uint256 counter = 0;
        for (uint256 i = 0; i < tasks.length; i++) {
            if (taskToOwner[i] == msg.sender && tasks[i].isDeleted == false) {
                temporary[counter] = tasks[i];
                counter++;
            }
        }
 
        Task[] memory result = new Task[](counter);
        for (uint256 i = 0; i < counter; i++) {
            result[i] = temporary[i];
        }
        return result;
    }
 
    function deleteTask(uint256 taskId, bool isDeleted) external {
        if (taskToOwner[taskId] == msg.sender) {
            tasks[taskId].isDeleted = isDeleted;
            emit DeleteTask(taskId, isDeleted);
        }
    }
}