const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
  try {
    await fs.writeFile(fileName, fileContent);
    console.log(`${fileName} was written successfully`);
  } catch (error) {
    console.error(`Error occurred while writing to ${fileName}: ${error.message}`);
  }
};

const myFileReader = async (fileName) => {
  try {
    const data = await fs.readFile(fileName, 'utf-8');
    console.log(`${fileName} was read successfully`);
    return data;
  } catch (error) {
    console.error(`Error occurred while reading from ${fileName}: ${error.message}`);
    return null;
  }
};

const myFileUpdater = async (fileName, fileContent) => {
  try {
    await fs.appendFile(fileName, fileContent);
    console.log(`${fileName} was updated successfully`);
  } catch (error) {
    console.error(`Error occurred while updating ${fileName}: ${error.message}`);
  }
};

const myFileDeleter = async (fileName) => {
  try {
    await fs.unlink(fileName);
    console.log(`${fileName} was deleted successfully`);
  } catch (error) {
    console.error(`Error occurred while deleting ${fileName}: ${error.message}`);
  }
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
