import { Shop } from "./models/shop";

export const actions: typeof Shop.reduce.actionType[] = [
    {
        type: "NAME",
        payload: { type: "REPLACE", payload: "Crazy Joe's Bookarama" }
    },
    {
        type: "SHELVES",
        payload: {
            key: 1
        }
    },
    {
        type: "SHELVES",
        payload: {
            key: 1,
            update: {
                type: "DESCRIPTION",
                payload: { type: "REPLACE", payload: "Romance" }
            }
        }
    },    
    {
        type: "SHELVES",
        payload: {
            key: 1,
            update: {
                type: "BOOKS",
                payload: {
                    key: 1
                }
            }
        }
    },    
    {
        type: "SHELVES",
        payload: {
            key: 1,
            update: {
                type: "BOOKS",
                payload: {
                    key: 1,
                    update: {
                        type: "TITLE",
                        payload: { type: "REPLACE", payload: "1984" }
                    }
                }
            }
        }
    },
    {
        type: "SHELVES",
        payload: {
            key: 1,
            update: {
                type: "BOOKS",
                payload: {
                    key: 1,
                    update: {
                        type: "TITLE",
                        payload: { type: "REPLACE", payload: "Gone with the Wind" }
                    }
                }
            }
        }
    },
    {
        type: "SHELVES",
        payload: {
            key: 1,
            update: {
                type: "BOOKS",
                payload: {
                    key: 1,
                    update: {
                        type: "PRICE",
                        payload: { type: "REPLACE", payload: 3.99 }
                    }
                }
            }
        }
    },
    {
        type: "SHELVES",
        payload: {
            key: 1,
            update: {
                type: "BOOKS",
                payload: {
                    key: 2,
                    update: {
                        type: "TITLE",
                        payload: { type: "REPLACE", payload: "50 Shades of Filth" }
                    }
                }
            }
        }
    },
    {
        type: "SHELVES",
        payload: {
            key: 1,
            update: {
                type: "BOOKS",
                payload: {
                    key: 2,
                    update: {
                        type: "PRICE",
                        payload: { type: "REPLACE", payload: 8.99 }
                    }
                }
            }
        }
    },
    {
        type: "SHELVES",
        payload: {
            key: 2,
            update: {
                type: "DESCRIPTION",
                payload: { type: "REPLACE", payload: "History" }
            }
        }
    },
    {
        type: "SHELVES",
        payload: {
            key: 2,
            update: {
                type: "BOOKS",
                payload: {
                    key: 1,
                    update: {
                        type: "TITLE",
                        payload: { type: "REPLACE", payload: "Henry VII for Dummies" }
                    }
                }
            }
        }
    },
    {
        type: "SHELVES",
        payload: {
            key: 2,
            update: {
                type: "BOOKS",
                payload: {
                    key: 1,
                    update: {
                        type: "PRICE",
                        payload: { type: "REPLACE", payload: 12.99 }
                    }
                }
            }
        }
    },
    {
        type: "SHELVES",
        payload: {
            key: 2,
            update: {
                type: "BOOKS",
                payload: {
                    key: 2,
                    update: {
                        type: "TITLE",
                        payload: { type: "REPLACE", payload: "Rome: Day 1" }
                    }
                }
            }
        }
    },
    {
        type: "SHELVES",
        payload: {
            key: 2,
            update: {
                type: "BOOKS",
                payload: {
                    key: 2,
                    update: {
                        type: "PRICE",
                        payload: { type: "REPLACE", payload: 16.99 }
                    }
                }
            }
        }
    },
    {
        type: "SHELVES",
        payload: {
            key: 2,
            update: {
                type: "BOOKS",
                payload: {
                    key: 3,
                    update: {
                        type: "TITLE",
                        payload: { type: "REPLACE", payload: "The Trump Experiment" }
                    }
                }
            }
        }
    },
    {
        type: "SHELVES",
        payload: {
            key: 2,
            update: {
                type: "BOOKS",
                payload: {
                    key: 3,
                    update: {
                        type: "PRICE",
                        payload: { type: "REPLACE", payload: 12.99 }
                    }
                }
            }
        }
    }
];
