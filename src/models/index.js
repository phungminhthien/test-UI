/**
 * @typedef {Object} IUserStore
 * @property {string} name
 */

/**
 * @typedef {Object} ITask
 * @property {string|number} id
 * @property {string} title
 * @property {string} description
 * @property {string|null} thumbnail
 * @property {ETaskState|string} status
 */

/**
 * @typedef {Object} ITaskStore
 * @property {ITask[]} tasks
 * @property {ITask[]} news
 * @property {any} count
 */

/**
 * @typedef {Object} IUser
 * @property {string} name
 */

/**
 * Enum for task states.
 * @enum {string}
 */
const ETaskState = {
  NEW: 'NEW',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
};
