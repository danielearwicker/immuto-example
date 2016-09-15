import { Shop } from "./models/shop";

export const actions: typeof Shop.reduce.actionType[] = [
    {
        "type": "NAME",
        "payload": "Crazy Joe's Bookarama"
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 1
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 1,
            "update": {
                "type": "DESCRIPTION",
                "payload": "Romance"
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 1,
            "update": {
                "type": "BOOKS",
                "payload": {
                    "key": 1
                }
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 1,
            "update": {
                "type": "BOOKS",
                "payload": {
                    "key": 1,
                    "update": {
                        "type": "TITLE",
                        "payload": "1984"
                    }
                }
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 1,
            "update": {
                "type": "BOOKS",
                "payload": {
                    "key": 1,
                    "update": {
                        "type": "TITLE",
                        "payload": "Gone with the Wind"
                    }
                }
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 1,
            "update": {
                "type": "BOOKS",
                "payload": {
                    "key": 1,
                    "update": {
                        "type": "PRICE",
                        "payload": 3.99
                    }
                }
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 1,
            "update": {
                "type": "BOOKS",
                "payload": {
                    "key": 2,
                    "update": {
                        "type": "TITLE",
                        "payload": "50 Shades of Filth"
                    }
                }
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 1,
            "update": {
                "type": "BOOKS",
                "payload": {
                    "key": 2,
                    "update": {
                        "type": "PRICE",
                        "payload": 8.99
                    }
                }
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 2,
            "update": {
                "type": "DESCRIPTION",
                "payload": "History"
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 2,
            "update": {
                "type": "BOOKS",
                "payload": {
                    "key": 1,
                    "update": {
                        "type": "TITLE",
                        "payload": "Henry VII for Dummies"
                    }
                }
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 2,
            "update": {
                "type": "BOOKS",
                "payload": {
                    "key": 1,
                    "update": {
                        "type": "PRICE",
                        "payload": 12.99
                    }
                }
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 2,
            "update": {
                "type": "BOOKS",
                "payload": {
                    "key": 2,
                    "update": {
                        "type": "TITLE",
                        "payload": "Rome: Day 1"
                    }
                }
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 2,
            "update": {
                "type": "BOOKS",
                "payload": {
                    "key": 2,
                    "update": {
                        "type": "PRICE",
                        "payload": 16.99
                    }
                }
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 2,
            "update": {
                "type": "BOOKS",
                "payload": {
                    "key": 3,
                    "update": {
                        "type": "TITLE",
                        "payload": "The Trump Experiment"
                    }
                }
            }
        }
    },
    {
        "type": "SHELVES",
        "payload": {
            "key": 2,
            "update": {
                "type": "BOOKS",
                "payload": {
                    "key": 3,
                    "update": {
                        "type": "PRICE",
                        "payload": 12.99
                    }
                }
            }
        }
    }
];
