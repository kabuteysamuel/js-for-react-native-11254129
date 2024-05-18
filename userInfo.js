function createUserProfiles(nameArr, modifiedNameArr) {
    if (nameArr.length !== modifiedNameArrlength) {
      throw new Error("Input arrays must be of the same length");
    }
    const userProfiles = [];
    let id = 1;
    for (let i = 0; i < nameArr.length; i++) {
      const originalName = nameArr[i];
      const modifiedName = modifiedNameArr[i];
      userProfiles.push({
        originalName,
        modifiedName,
        id: id++,
      });
    }
    return userProfiles;
  }