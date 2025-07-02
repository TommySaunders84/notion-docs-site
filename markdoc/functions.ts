/* Use this file to export your Markdoc functions */

export const includes = {
  transform(parameters) {
    const [array, value] = Object.values(parameters);

    return Array.isArray(array) ? array.includes(value) : false;
  },
};

export const upper = {
  transform(parameters) {
    const string = parameters[0];
    return typeof string === 'string' ? string.toUpperCase() : string;
  },
};

export const formatDate = {
  transform(parameters) {
    const date = parameters[0];
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  },
};