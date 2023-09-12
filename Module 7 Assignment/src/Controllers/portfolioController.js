exports.create = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Create operation' });
  };
  
  exports.read = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Read operation' });
  };
  
  exports.delete = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Delete operation' });
  };
  
  exports.update = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Update operation' });
  };